<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at http://uvo1xbc3qe9unlyex5f.env.cloudshare.com/sites/chapter6/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fuvo1xbc3qe9unlyex5f%2Eenv%2Ecloudshare%2Ecom%2Fsites%2Fchapter6%2F%5Fcatalogs%2Fmasterpage%2Fspectergroup%2Dnav%2Dbasic%2FSpecter%20Homepage%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
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
            <div class="row-fluid">
                <div class="span12">
                    <!-- SLIDER -->
                    <div class="slider-wrapper theme-nivo-specter theme-project theme-home">
                        <div class="ribbon">
                        </div>
                        <div id="hpslider" class="nivoSlider">
                            <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/banner-one.jpg" alt="" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <a href="#">
                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/banner-two.jpg" alt="" title="Maecenas massa arcu, posuere eget hendrerit at, venenatis sit." />
                            </a>
                        </div>
                    </div>
                    <!-- ENDS SLIDER -->
                </div>
            </div>
            <!-- headline -->
            <div class="row-fluid">
                <div class="span12">
                    <div class="headline">
                        <h2>Welcome to Specter Group
                        
                        
                        </h2>
                        <h4>A Premier Builder Service Eastern Atlantis
                        
                        
                        </h4>
                    </div>
                </div>
            </div>
            <!-- ENDS headline -->
            <!-- community list -->
            <div class="row-fluid">
                <div class="span12 community-list section">
                    <h2 class="heading">Communities
                    
                    
                    </h2>
                    <div class="row-fluid list">
                        <div class="span4">
                            <a href="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/community-eagle-vista.html" class="thumbcaption">
                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/communities-eagle-small.jpg" alt="Eagle Vista" />
                                <span>Eagle Vista
                                
                                
                                </span>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa arcu, posuere eget hendrerit at, venenatis sit amet elit. Nullam tempor interdum nisi.
                            
                            
                            </p>
                        </div>
                        <div class="span4">
                            <a href="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/community-spruce-meadows.html" class="thumbcaption">
                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/communities-spruce-small.jpg" alt="Spruce Meadows" />
                                <span>Spruce Meadows
                                
                                
                                </span>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa arcu, posuere eget hendrerit at, venenatis sit amet elit. Nullam tempor interdum nisi.
                            
                            
                            </p>
                        </div>
                        <div class="span4">
                            <a href="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/community-otay-crossings.html" class="thumbcaption">
                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/communities-otay-small.jpg" alt="Otay Crossings" />
                                <span>Otay Crossings
                                
                                
                                </span>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa arcu, posuere eget hendrerit at, venenatis sit amet elit. Nullam tempor interdum nisi.
                            
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end community list -->
            <!-- community list -->
            <div class="row-fluid">
                <div class="span12">
                    <div class="our-homes section">
                        <h2 class="heading">Our Homes
                        
                        
                        </h2>
                        <div class="row-fluid">
                            <div class="span8">
                                <div class="header">
                                    <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/icon-homes-home.png" alt="" />
                                </div>
                                <div class="row-fluid homes">
                                    <div class="span4">
                                        <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/homes-small-one.jpg" alt="Home" />
                                    </div>
                                    <div class="span8">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa arcu, posuere eget hendrerit at.
                                        
                                        
                                        <br />
                                        <a href="#" class="button">Learn More
                                        
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <div class="header">
                                    <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/icon-homes-view.png" alt="" />
                                </div>
                                <div class="contentbox views cf">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/icon-view-photos.png" alt="Photes" />
                                                <br />


Photos                                                                                                                                    </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/icon-view-video.png" alt="Videos" />
                                                <br />


Videos                                                                                                                                    </a>
                                        </li>
                                        <li class="full">
                                            <a href="#">
                                                <img src="/sites/chapter6/_catalogs/masterpage/spectergroup-nav-1-basic/img/icon-view-tour.png" alt="Virtual Tours" />
                                                <br />


Virtual Tours                                                                                                                                    </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end community list -->
        </asp:Content>