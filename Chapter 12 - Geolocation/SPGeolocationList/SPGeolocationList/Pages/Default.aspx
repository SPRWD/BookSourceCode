<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" language="C#" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>





<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
     <WebPartPages:AllowFraming ID="AllowFraming1" runat="server" />
    <script type="text/javascript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>

    <script type="text/javascript" src="../Scripts/jquery-1.6.2.min.js"></script>

  
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

   
    <script type="text/javascript" src="../Scripts/App.js"></script>
   
    <script type="text/javascript">
        $(document).ready(function () {
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () { sharePointReady(); });
        });
    </script>
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    
    <div>
        <p id="message">           
        </p>
        <input type="button" id="button" value="Location List" onclick="location.href = '../Lists/LocationList'"/> <br /><br />
        
        *Family: <input id="familytext" type="text" style="width:400px" value="Type family name here..." onclick ="clearfamilydefault();" /> <br /><br />

        <input type="button" id ="autodetectbutton" value="Use current location" onclick="getcurrentaddress();"/><br /><br />

        Type Address: <input id="addresstext" type="text" style="width:400px" value="Type address here..." onclick ="clearaddressdefault();" /> 
        <input type="button" id ="getaddressbutton" value="Get address" onclick="getaddress();"/><br />
        
         <div id='mapDiv' style="position:relative; width:0px; height:0px;"></div>

<WebPartPages:WebPartZone runat="server"
FrameType="TitleBarOnly" ID="full" Title="loc:full" >
<WebPartPages:XsltListViewWebPart ID="XsltListViewWebPart2"
runat="server" ListUrl="Lists/LocationList" IsIncluded="True"
NoDefaultStyle="TRUE" Title="locationlist"
PageType="PAGE_NORMALVIEW" Default="True"
ViewContentTypeId="0x">
</WebPartPages:XsltListViewWebPart>
</WebPartPages:WebPartZone>

    
    </div>

</asp:Content>
