/* ===========================================================
 * bootstrap-fileupload.js j2
 * Code to upload files in SharePoint; derived from bootstrap file upload plugin
 * http://jasny.github.com/bootstrap/javascript.html#fileupload
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {

    "use strict"; // jshint ;_
    //alert("fileupload.js");
    /* FILEUPLOAD PUBLIC CLASS DEFINITION
    * ================================= */
    var file

    var Fileupload = function (element, options) {
        //alert("FILEUPLOAD");
        this.$element = $(element)
        this.type = this.$element.data('uploadtype') || (this.$element.find('.thumbnail').length > 0 ? "image" : "file")

        this.$input = this.$element.find(':file')
        if (this.$input.length === 0) return

        this.name = this.$input.attr('name') || options.name

        this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
        if (this.$hidden.length === 0) {
            this.$hidden = $('<input type="hidden" />')
            this.$element.prepend(this.$hidden)
        }
	
	
        this.$preview = this.$element.find('.fileupload-preview')
        this.$path = this.$element.find('.fileupload-path')
        var height = this.$preview.css('height')
        if (this.$preview.css('display') != 'inline' && height != '0px' && height != 'none') this.$preview.css('line-height', height)

        this.original = {
            'exists': this.$element.hasClass('fileupload-exists'),
            'preview': this.$preview.html(),
            'path': this.$path.html(),
            'hiddenVal': this.$hidden.val()
        }

        this.$remove = this.$element.find('[data-dismiss="fileupload"]')
        this.$uploadnow = this.$element.find('[data-dismiss="fileuploadnow"]')
        this.$element.find('[data-trigger="fileupload"]').on('click.fileupload', $.proxy(this.trigger, this))

        this.listen()
    }

    Fileupload.prototype = {

        listen: function () {
            //alert("listen")
            this.$input.on('change.fileupload', $.proxy(this.change, this))
            $(this.$input[0].form).on('reset.fileupload', $.proxy(this.reset, this))
            if (this.$remove) this.$remove.on('click.fileupload', $.proxy(this.clear, this))
            if (this.$uploadnow) this.$uploadnow.on('click.fileupload', $.proxy(this.upload, this))
        },

        upload: function (e) {
            alert("upload invoked");
            if (!file) {
                alert("no file to upload")
                this.clear()
                return
            }
            alert("before file reading")
            var bufferReader = new FileReader()
            	    

            bufferReader.onload = function (e) {
                alert("buffer reading")
                var buffer = e.target.result;
		var digest = $('#__REQUESTDIGEST').val();
		alert(digest);

                $.ajax({
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('/sites/fileuploadtest/Documents/Communities')/Files/Add(url='" + file.name + "',overwrite=true)",
                    method: 'POST',
                    data: buffer,//bytes,
                    //binaryStringRequestBody: true,
                    headers: {
                        //"Accept": "application/json; odata=verbose",
                        'content-type': "application/json;odata=verbose",
                        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
                        "content-length": buffer.length//bytes.byteLength
                    },
                    processData: false,//ensure no conversion is done on the image file
                    success: function (e) {
                        alert('successfully done');
                    },
                    error: function (err) { alert("Error in JSON: " + JSON.stringify(err)); },
                    //state: "Update"
                });
                
            }
            bufferReader.onerror = function (e) {
                alert("File could not be read! Code " + e.target.error.code);
            };

            bufferReader.readAsArrayBuffer(file);
            alert("after add file");
            e.preventDefault()
        },       

        change: function (e, invoked) {
            //alert("change")
            if (invoked === 'clear') return

            file = e.target.files !== undefined ? e.target.files[0] : (e.target.value ? { name: e.target.value.replace(/^.+\\/, '')} : null)

            if (!file) {
                this.clear()
                return
            }

            this.$hidden.val('')
            this.$hidden.attr('name', '')
            this.$input.attr('name', this.name)

            if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match('image.*') : file.name.match('\\.(gif|png|jpe?g)$')) && typeof FileReader !== "undefined") {//this.type === "image" &&
               
                var urlReader = new FileReader()
                var preview = this.$preview
                var element = this.$element

		

                urlReader.onload = function (e) {
                    preview.html('<img src="' + e.target.result + '" ' + (preview.css('max-height') != 'none' ? 'style="max-height: ' + preview.css('max-height') + ';"' : '') + ' />')
                    element.addClass('fileupload-exists').removeClass('fileupload-new')
                }
                urlReader.onerror = function (e) {
                    alert("File could not be read! Code " + e.target.error.code);
                };              
               
               
                urlReader.readAsDataURL(file)
                this.$path.text(file.name)               

            } else {
                alert("did not read file");
                //alert("file type: " + file.type + " type: " + this.type);
                this.$path.text(file.name)
                this.$element.addClass('fileupload-exists').removeClass('fileupload-new')
            }
        },

        clear: function (e) {
            //alert("clear")
            this.$hidden.val('')
            this.$hidden.attr('name', this.name)
            this.$input.attr('name', '')

            //ie8+ doesn't support changing the value of input with type=file so clone instead
            if (navigator.userAgent.match(/msie/i)) {
                var inputClone = this.$input.clone(true);
                this.$input.after(inputClone);
                this.$input.remove();
                this.$input = inputClone;
            } else {
                this.$input.val('')
            }

            this.$preview.html('')
            this.$path.html('')
            this.$element.addClass('fileupload-new').removeClass('fileupload-exists')

            if (e) {
                this.$input.trigger('change', ['clear'])
                e.preventDefault()
            }
        },

        reset: function (e) {
            //alert("reset")
            this.clear()

            this.$hidden.val(this.original.hiddenVal)
            this.$preview.html(this.original.preview)
            this.$path.html(this.original.path)

            if (this.original.exists) this.$element.addClass('fileupload-exists').removeClass('fileupload-new')
            else this.$element.addClass('fileupload-new').removeClass('fileupload-exists')
        },

        trigger: function (e) {
            alert("trigger")
            this.$input.trigger('click')
            e.preventDefault()
        }
    }


    /* FILEUPLOAD PLUGIN DEFINITION
    * =========================== */

    $.fn.fileupload = function (options) {
        return this.each(function () {
            var $this = $(this)
      , data = $this.data('fileupload')
            if (!data) $this.data('fileupload', (data = new Fileupload(this, options)))
            if (typeof options == 'string') data[options]()
        })
    }

    $.fn.fileupload.Constructor = Fileupload


    /* FILEUPLOAD DATA-API
    * ================== */

    $(document).on('click.fileupload.data-api', '[data-provides="fileupload"]', function (e) {
        //alert("fileupload data-api")
        var $this = $(this)
        if ($this.data('fileupload')) return
        $this.fileupload($this.data())

        var $target = $(e.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');
        //alert("target");
        if ($target.length > 0) {
            //alert("click fileupload")
            $target.trigger('click.fileupload')
            e.preventDefault()
        }
    })

} (window.jQuery);
