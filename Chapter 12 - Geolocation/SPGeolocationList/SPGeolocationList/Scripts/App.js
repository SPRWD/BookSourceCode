var context;
var web;
var user;
var map;
var locationLat;
var locationLong;

// This function is executed after the DOM is ready and SharePoint scripts are loaded
// Place any code you want to run when Default.aspx is loaded in this function
// The code creates a context object which is needed to use the SharePoint object model
function sharePointReady() {
    //alert('set map key');
    context = new SP.ClientContext.get_current();
    web = context.get_web();
    var props = web.get_allProperties();
    props.set_item("BING_MAPS_KEY", "AqebMEelQzBhzGnbvS34kTlrwM8HTcVL1kS9lBVuwhwYI-pjGzMvcgcFz8g3ldNv");//"ApqzNRu0mn1Li2ngnD2x-ZCwalMB0m1IavSP5tcINeZRQ7feN1uppjEt-GpSPLiN");
    web.update();
    context.executeQueryAsync(onSetmapkeySuccess, onSetmapkeyFail);
   
    map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), { credentials: "AqebMEelQzBhzGnbvS34kTlrwM8HTcVL1kS9lBVuwhwYI-pjGzMvcgcFz8g3ldNv", mapTypeId: Microsoft.Maps.MapTypeId.road });

}

function onSetmapkeySuccess() {
    alert("set map success");
}

function onSetmapkeyFail() {
    alert("set map failed");
}

// This function prepares, loads, and then executes a SharePoint query to get the current users information
function getUserName() {
    user = web.get_currentUser();
    context.load(user);
    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
}

// This function is executed if the above OM call is successful
// It replaces the content of the 'welcome' element with the user name
function onGetUserNameSuccess() {
    $('#message').text('Hello ' + user.get_title());
}

// This function is executed if the above OM call fails
function onGetUserNameFail(sender, args) {
    alert('Failed to get user name. Error:' + args.get_message());
}

function getcurrentaddress() {
    alert('getcurrentaddress');
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position)
{
    alert('showposition');
    locationLat = position.coords.latitude;
    locationLong = position.coords.longitude;
    alert('Current lat: ' + locationLat + ' long: ' + locationLong);
    createListItem();
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}


function getaddress() {
    //alert('getaddress');
    var address = $('#addresstext').val();
    //alert('input address: ' + address);
    ClickGeocode();
}
function clearaddressdefault() {
    //alert('cleardefault');
    var current = $('#addresstext').val();
    if (current == 'Type address here...') {
        //alert('clearing');
        $('#addresstext').val('');
    }
}

function clearfamilydefault() {
    //alert('cleardefault');
    var current = $('#familytext').val();
    if (current == 'Type family name here...') {
        //alert('clearing');
        $('#familytext').val('');
    }
}

//map related
function ClickGeocode(credentials) {
    //alert('ClickGeocode');
    map.getCredentials(MakeGeocodeRequest);
}

function MakeGeocodeRequest(credentials) {
    //alert('MakeGeocodeRequest');
    //var addr = document.getElementById('addresstext').value;
    //alert('MakeGeocodeRequest: ' + addr);
    var geocodeRequest = "http://dev.virtualearth.net/REST/v1/Locations?query=" + encodeURI(document.getElementById('addresstext').value) + "&output=json&jsonp=GeocodeCallback&key=" + credentials;

    CallRestService(geocodeRequest);
}

function GeocodeCallback(result) {
    alert("Found location: " + result.resourceSets[0].resources[0].name);

    if (result &&
           result.resourceSets &&
           result.resourceSets.length > 0 &&
           result.resourceSets[0].resources &&
           result.resourceSets[0].resources.length > 0) {

        //get lat and lon
        var lat = result.resourceSets[0].resources[0].point.coordinates[0];
        var long = result.resourceSets[0].resources[0].point.coordinates[1];
        locationLat = lat;
        locationLong = long;
        //alert('lat: ' + lat + ' long: ' + long);
        createListItem();
    }
}

function CallRestService(request) {
    //alert('CallRestService');
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", request);
    document.body.appendChild(script);
}

//create an item in a list
function createListItem() {
    //alert('createListItem');
    var family = $('#familytext').val();
    var oList = web.get_lists().getByTitle('LocationList');

    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
    oListItem.set_item('Title', family);    

    alert('Adding new location: (lat: ' + locationLat + ' long: ' + locationLong + ')');
    oListItem.set_item('Location1', 'POINT (' + locationLong + ' ' + locationLat + ')');
    oListItem.update();

    context.load(oListItem);
    context.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded),
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    alert('Item created!');// + oListItem.get_id());
    window.location.reload();
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() +
        '\n' + args.get_stackTrace());
}


