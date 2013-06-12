<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<PublishingWebControls:EditModePanel runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	</PublishingWebControls:EditModePanel>
	<SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
	<SharePointWebControls:FieldValue FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server"> <SharePointWebControls:ListSiteMapPath runat="server" SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false" PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode" CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode" RootNodeStyle-CssClass="s4-breadcrumbRootNode" NodeImageOffsetX=0 NodeImageOffsetY=289 NodeImageWidth=16 NodeImageHeight=16 NodeImageUrl="/_layouts/15/images/fgimg.png?rev=23" HideInteriorRootNodes="true" SkipLinkText="" /> </asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<!-- page-content -->
	<div class="row-fluid">
		<div class="span12 page-content">
			<PublishingWebControls:EditModePanel runat = "server" PageDisplayMode = "Edit" CssClass = "edit-mode-panel">
				<SharePointWebControls:TextField runat = "server" FieldName = "Title"/>
			</PublishingWebControls:EditModePanel>
			<PublishingWebControls:EditModePanel runat = "server" PageDisplayMode = "Display">
				<h2 class = "heading">
					<SharePointWebControls:FieldValue id = "PageTitle" FieldName = "Title" runat = "server"/>
				</h2>
			</PublishingWebControls:EditModePanel>
			<PublishingWebControls:EditModePanel runat = "server" CssClass = "edit-mode-panel">
				<SharePointWebControls:TextField runat = "server" FieldName = "SeoMetaDescription"/>
			</PublishingWebControls:EditModePanel>
			
			<!-- entry-content -->
			<div class="row-fluid section noborder">
				<div class="span12">
			
					<div class="floatleft">
						<PublishingWebControls:RichImageField FieldName = "PublishingPageImage" runat = "server"/>
					</div>
					<PublishingWebControls:RichHtmlField FieldName = "PublishingPageContent" runat = "server"/>
					
					<div class="row-fluid section noborder">
						<div class = "span6">
							<WebPartPages:WebPartZone runat = "server" Title = "LeftZone" ID = "LeftColumn">
								<ZoneTemplate > </ZoneTemplate>
							</WebPartPages:WebPartZone>
						</div>
						<div class = "span6">
							<WebPartPages:WebPartZone runat = "server" Title = "RightZone" ID = "RightColumn">
								<ZoneTemplate > </ZoneTemplate>
							</WebPartPages:WebPartZone>
						</div>
					</div>
					<!-- ENDS 2 cols -->
				</div> <!--end span12-->
			</div> <!--end sub row-->
		</div> <!-- ENDS page-content -->
	</div> <!-- ENDS fluid-row-->
</asp:Content>
