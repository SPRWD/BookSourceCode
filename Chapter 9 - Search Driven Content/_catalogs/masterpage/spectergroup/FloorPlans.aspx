<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at http://sprwd.cld.sr/sites/chapter9/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fsprwd%2Ecld%2Esr%2Fsites%2Fchapter9%2F%5Fcatalogs%2Fmasterpage%2Fspectergroup%2FFloorPlans%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldTextField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version = 15.0.0.0, Culture = neutral, PublicKeyToken = 71e9bce111e9429c" %>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version = 15.0.0.0, Culture = neutral, PublicKeyToken = 71e9bce111e9429c" %>
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
            
            
            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="x5bb499f3b1df4f469fd12354190fd2a1" FrameType="TitleBarOnly" Orientation="Vertical">
                <ZoneTemplate>
                </ZoneTemplate>
            </WebPartPages:WebPartZone>
        </asp:Content>