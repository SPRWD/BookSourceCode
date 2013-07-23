<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at http://sprwd.cld.sr/sites/chapter7/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fsprwd%2Ecld%2Esr%2Fsites%2Fchapter7%2F%5Fcatalogs%2Fmasterpage%2FSpecterGroup%2FCommunity%5FProperty%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldTextField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version = 15.0.0.0, Culture = neutral, PublicKeyToken = 71e9bce111e9429c" %>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version = 15.0.0.0, Culture = neutral, PublicKeyToken = 71e9bce111e9429c" %>
<%@Register TagPrefix="PageFieldRichHtmlField" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version = 15.0.0.0, Culture = neutral, PublicKeyToken = 71e9bce111e9429c" %>
<%@Register TagPrefix="a08fba8b1" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
            <SharePoint:ProjectProperty Property="Title" runat="server">
            </SharePoint:ProjectProperty>
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
            
            
            
            <Publishing:EditModePanel runat="server" id="editmodestyles">
                <SharePoint:CssRegistration name="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %&gt;" After="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %&gt;" runat="server">
                </SharePoint:CssRegistration>
            </Publishing:EditModePanel>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea">
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
			
			<Publishing:EditModePanel runat="server" CssClass="edit-mode-panel">
				
				<PageFieldTextField:TextField FieldName="Title" runat="server">
				</PageFieldTextField:TextField>
				<PageFieldTextField:TextField FieldName="SeoMetaDescription" runat="server">
				</PageFieldTextField:TextField>
			</Publishing:EditModePanel>
			
			<!-- SLIDER -->
			
			<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="x5bb499f3b1df4f469fd12354190fd2a1" FrameType="TitleBarOnly" Orientation="Vertical">
				<ZoneTemplate> </ZoneTemplate>
			</WebPartPages:WebPartZone>

			<!-- ENDS SLIDER -->
			
			<div id="posts-list" class="community-listing cf"> 
				<!--community listing-->
				<div class="page-content cf"> 
					<article>
						<!-- property content -->
						
						<PageFieldRichHtmlField:RichHtmlField FieldName="PublishingPageContent" runat="server">
						</PageFieldRichHtmlField:RichHtmlField>
						<!-- end property content -->
					</article>
				</div>
				<!-- end community list -->
			
				<div id="comments-wrap">
					<h4 class="heading">Community Discussion</h4>
					
					<ul class="comments-links-horizontal">
						<li><a href="#">Recent</a></li>
						<li><a href="#">What's Hot</a></li>
						<li><a href="#">My Discussions</a></li>
					</ul>
					
					<div class="toggle-trigger"><i class="simple"></i>Start a New Discussion</div>		
					<div class="toggle-container form">
						<!-- CSOM or Form Web Part snippet-->
						<!--
						<p class="form-text"><label for="topic">Topic</label><input id="topic" name="topic" type="text" value="" size="30"/></p>
						<p class="form-comment"><label for="comment">Comments</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>						
						<p class="form-submit">
							<a class="link-button" href="JavaScript:void();" onClick="return false;">Post Discussion Topic</a>
						</p>
						-->
					</div>
					
					<!--NOTE: Content Search Snippet coding, refer to chapter 9 for guidance-->
					<!--
					<ol class="commentlist">
						<li class="comment even thread-even depth-1" id="li-comment-1">
							<div id="comment-1" class="comment-body cf">
						     	<img alt='' src='http://placehold.it/560x300&#38;text=Avatar' class='avatar avatar-35 photo' height='35' width='35'/>
						     	<div class="comment-author vcard">OMedina</div>
						        <div class="comment-meta commentmetadata">
							  		<span class="comment-date">3 days ago  </span>
									<span class="comment-reply-link-wrap"><a class='comment-reply-link' href='#'>Reply</a></span>
									<span class="comment-replies">9 replies</span>
									<span class="comment-likes">6 likes  </span>
								</div>
						  		<div class="comment-inner">
									<h4><a href="#">Grilling Time!</a></h4>
							   		<p>We are having a casual Friday grilling get together...</p>
						 		</div>
					     	</div>
						</li><li class="comment even thread-even depth-1" id="li-comment-1">
							<div id="comment-1" class="comment-body cf">
						     	<img alt='' src='http://placehold.it/560x300&#38;text=Avatar' class='avatar avatar-35 photo' height='35' width='35'/>
						     	<div class="comment-author vcard">RZhang</div>
						        <div class="comment-meta commentmetadata">
							  		<span class="comment-date">3 days ago  </span>
									<span class="comment-reply-link-wrap"><a class='comment-reply-link' href='#'>Reply</a></span>
									<span class="comment-replies">3 replies</span>
									<span class="comment-likes">2 likes  </span>
								</div>
						  		<div class="comment-inner">
									<h4><a href="#">Car Pool Anyone?</a></h4>
							   		<p>Driving into the city, anyone want to carpool?</p>
						 		</div>
					     	</div>
						</li>
						<li class="comment even thread-even depth-1" id="li-comment-1">
							<div id="comment-1" class="comment-body cf">
						     	<img alt='' src='http://placehold.it/560x300&#38;text=Avatar' class='avatar avatar-35 photo' height='35' width='35'/>
						     	<div class="comment-author vcard">CBeckett</div>
						        <div class="comment-meta commentmetadata">
							  		<span class="comment-date">5 days ago  </span>
									<span class="comment-reply-link-wrap"><a class='comment-reply-link' href='#'>Reply</a></span>
									<span class="comment-replies">8 replies</span>
									<span class="comment-likes">2 likes  </span>
								</div>
						  		<div class="comment-inner">
									<h4><a href="#">Recycling Day!</a></h4>
							   		<p>I'm looking for volunteers to help me...</p>
						 		</div>
					     	</div>
						</li>
						<li class="comment even thread-even depth-1" id="li-comment-1">
							<div id="comment-1" class="comment-body cf">
						     	<img alt='' src='http://placehold.it/560x300&#38;text=Avatar' class='avatar avatar-35 photo' height='35' width='35'/>
						     	<div class="comment-author vcard">KKhipple</div>
						        <div class="comment-meta commentmetadata">
							  		<span class="comment-date">6 days ago  </span>
									<span class="comment-reply-link-wrap"><a class='comment-reply-link' href='#'>Reply</a></span>
									<span class="comment-replies">9 replies</span>
									<span class="comment-likes">6 likes  </span>
								</div>
						  		<div class="comment-inner">
									<h4><a href="#">Selling my laptop for $300</a></h4>
							   		<p>Anyone interested? Come and check it out...</p>
						 		</div>
					     	</div>
						</li>
					</ol>
					-->
				</div>
			</div>
			<!--end post listing-->
			
			<!-- sidebar -->
        	<aside id="sidebar" class="community-listing">
        		<ul>
	        		<li class="block">
		        		<h4 class="heading">Community Tools</h4>
						
						
						<a08fba8b1:SummaryLinkWebPart runat="server" SummaryLinkStore="" EnableOriginalValue="False" ViewFlag="0" ViewContentTypeId="" ListUrl="" ListDisplayName="" ListId="00000000-0000-0000-0000-000000000000" PageSize="-1" UseSQLDataSourcePaging="True" DataSourceID="" ShowWithSampleData="False" AsyncRefresh="False" ManualRefresh="False" AutoRefresh="False" AutoRefreshInterval="60" NoDefaultStyle="" InitialAsyncDataFetch="False" Title="&lt;%$Resources:cmscore,SummaryLinkWebPart_Title%&gt;" FrameType="None" SuppressWebPartChrome="true" Description="&lt;%$Resources:cmscore,SummaryLinkWebPart_Description%&gt;" IsIncluded="True" ZoneID="" PartOrder="0" FrameState="Normal" AllowRemove="True" AllowZoneChange="True" AllowMinimize="True" AllowConnect="True" AllowEdit="True" AllowHide="True" IsVisible="True" DetailLink="" HelpLink="" HelpMode="Modeless" Dir="Default" PartImageSmall="" MissingAssembly="&lt;%$Resources:cmscore,WebPartImportError%&gt;" ImportErrorMessage="&lt;%$Resources:cmscore,WebPartImportError%&gt;" PartImageLarge="" IsIncludedFilter="" ExportControlledProperties="True" ConnectionID="00000000-0000-0000-0000-000000000000" ID="g_f8aec9e3_b293_49c0_a164_60a4433a18f2" ChromeType="TitleOnly" ExportMode="All" __MarkupType="vsattributemarkup" __WebPartId="{f8aec9e3-b293-49c0-a164-60a4433a18f2}" WebPart="true" Height="" Width="">
						<Xsl><xsl:stylesheet version="1.0" exclude-result-prefixes="xsl cmswrt x"><xsl:import href="/Style Library/XSL Style Sheets/Header.xsl" /><xsl:import href="/Style Library/XSL Style Sheets/ItemStyle.xsl" /><xsl:import href="/Style Library/XSL Style Sheets/SummaryLinkMain.xsl" /></xsl:stylesheet></Xsl><SampleData><dsQueryResponse><Rows><Row Title="" Order="1" BeginColumn="True" IsGroupHeader="false" /><Row Title="Item 1" LinkUrl="http://Item1" Group="Group Header" Order="2" BeginColumn="False" IsGroupHeader="False" /><Row Title="Item 2" LinkUrl="http://Item2" Group="Group Header" Order="3" BeginColumn="False" IsGroupHeader="False" /><Row Title="Item 3" LinkUrl="http://Item3" Group="Group Header" Order="4" BeginColumn="False" IsGroupHeader="False" /></Rows></dsQueryResponse></SampleData><DataFields />
						</a08fba8b1:SummaryLinkWebPart>
						
						<!--
						<ul>
							<li class="page-item"><a href="#">Manage discussions</a></li>
							<li class="page-item"><a href="#">Create categories</a></li>
							<li class="page-item"><a href="#">Assign badges to members</a></li>
							<li class="page-item"><a href="#">Reputation settings</a></li>
							<li class="page-item"><a href="#">Community settings</a></li>
						</ul>
						-->
	        		</li>
	        		
	        		<li class="block">
		        		<h4 class="heading">What's Happening</h4>
						<!--NOTE: Content Search Snippet coding, refer to chapter 9 for guidance-->
						<!--
						<ul>
							<li class="cat-item"><a href="#" title="title">Members<span class="post-counter"> (9)</span></a></li>
							<li class="cat-item"><a href="#" title="title">Discussions<span class="post-counter"> (23)</span></a></li>
							<li class="cat-item"><a href="#" title="title">Replies<span class="post-counter"> (56)</span></a></li>
							<li class="cat-item"><a href="#">Top contributors</a></li>
						</ul>
						-->
	        		</li>
	        		
	        		<li class="block">
		        		<div id="map_canvas"></div>
						<!-- GOOGLE MAPS -->
						<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=true">//<![CDATA[//]]></script>
						<script type="text/javascript">//<![CDATA[
							function initGMap() {
								var latlng = new google.maps.LatLng(38.5450, -121.7394);
								var myOptions = {
								  zoom: 12,
								  center: latlng,
								  mapTypeId: google.maps.MapTypeId.ROADMAP
							};
							var map = new google.maps.Map(document.getElementById("map_canvas"),
								myOptions);
							}
							jQuery(document).ready(function($) {initGMap();});
						//]]></script>
	        		</li>
        		</ul>
        	</aside>
			<!-- ENDS sidebar -->
        </asp:Content>