/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_9cde636cb0f5459cbb34642bafe9b6f1(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_9cde636cb0f5459cbb34642bafe9b6f1.DisplayTemplateData = ctx['DisplayTemplateData'];

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
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_largePicture_Specter_");
var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncode);

var line1 = $getItemValue(ctx, "Line 1");
var line2 = $getItemValue(ctx, "Line 2");
var pictureURL = $getItemValue(ctx, "Picture URL");
var pictureId = encodedId + "picture";
var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 468, 220,
ctx.CurrentItem, "cbs-largePictureImg", line1, pictureId);
var specterPropertyType = $getItemValue(ctx, "SpecterPropertyType");
var lastModifiedTime = $getItemValue(ctx, "LastModifiedTime");

var m_names = new Array("Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec");

var d = new Date(lastModifiedTime);
var date = d.getDate();
var d_month = d.getMonth();
var month = m_names[d_month];
ms_outHtml.push(''
,'	<span class="', specterPropertyType,'">'
,'		<a href="', linkURL ,'" class="thumb">'
,'			', pictureMarkup ,''
,'			<div class="date">'
,'				<div class="d">', date,'</div>'
,'				<div class="m">', month,'</div>'
,'			</div>'
,'		</a>'
,'		<div class="caption">Property Type: ', specterPropertyType,'</div>'
,'	</span>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_9cde636cb0f5459cbb34642bafe9b6f1() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_LargePicture", DisplayTemplate_9cde636cb0f5459cbb34642bafe9b6f1);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js", DisplayTemplate_9cde636cb0f5459cbb34642bafe9b6f1);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_9cde636cb0f5459cbb34642bafe9b6f1();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_LargePicture_Specter.js"), RegisterTemplate_9cde636cb0f5459cbb34642bafe9b6f1);
}