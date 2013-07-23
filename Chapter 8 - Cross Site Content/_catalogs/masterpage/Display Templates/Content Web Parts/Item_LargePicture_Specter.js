/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'LastModifiedTime':['LastModifiedTime'], 'Specter Property Type':['SpecterPropertyType'], 'Picture URL':['PublishingImage', 'PictureURL', 'PictureThumbnailURL'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':['Description'], 'SecondaryFileExtension':null, 'ContentTypeId':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_largePicture_");

var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncode);

var line1 = $getItemValue(ctx, "Line 1");
var line2 = $getItemValue(ctx, "Line 2");

var pictureURL = $getItemValue(ctx, "Picture URL");
var pictureId = encodedId + "picture";
var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 468, 220, ctx.CurrentItem, "cbs-largePictureImg", line1, pictureId);

var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureContainerId = encodedId + "pictureContainer";
var dataContainerId = encodedId + "dataContainer";
var dataContainerOverlayId = encodedId + "dataContainerOverlay";
var line1LinkId = encodedId + "line1Link";
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";

    //custom js code
var lastModifiedTime = $getItemValue(ctx, "LastModifiedTime");
var specterPropertyType = $getItemValue(ctx, "SpecterPropertyType");

var m_names = new Array("Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");

var d = new Date(lastModifiedTime);
var date = d.getDate();
var d_month = d.getMonth();
var month = m_names[d_month];
 ms_outHtml.push(''
,' '
,'		<!--'
,'        <div class="cbs-largePictureContainer" id="', containerId ,'" data-displaytemplate="ItemLargePicture">'
,'            <div class="cbs-largePictureImageContainer" id="', pictureContainerId ,'">'
,'                <a class="cbs-pictureImgLink" href="', linkURL ,'" title="', $htmlEncode(line1) ,'" id="', pictureLinkId ,'">'
,'                    ', pictureMarkup ,''
,'                </a>'
,'            </div>'
,'            <div class="cbs-largePictureDataOverlay"  id="', dataContainerOverlayId ,'"></div>'
,'            <div class="cbs-largePictureDataContainer" id="', dataContainerId ,'">'
,'                <a class="cbs-largePictureLine1Link" href="', linkURL ,'" title="', $htmlEncode(line1) ,'" id="', line1LinkId ,'">'
,'                    <h2 class="cbs-largePictureLine1 ms-noWrap" id="', line1Id ,'"> ', line1 ,'</h2>'
,'                </a>'
,'                <div class="cbs-largePictureLine2 ms-noWrap" title="', $htmlEncode(line2) ,'" id="', line2Id ,'"> ', line2 ,'</div>'
,'            </div>'
,'        </div>'
,'        -->'
,'        <span class="', specterPropertyType ,'">'
,'		<a href="', linkURL ,'" class="thumb">', pictureMarkup ,''
,'		<div class="date"><div class="d">', date ,'</div>'
,'		<div class="m">', month ,'</div></div>'
,'		</a>'
,'		<div class="caption">', specterPropertyType ,'</div>'
,'		</span>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_LargePicture", DisplayTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js", DisplayTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js"), RegisterTemplate_f0e0a1d8f18e4a1fadb635aba4b8c672);
}