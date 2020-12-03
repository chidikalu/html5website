function CreateDrivingDirectionMap() {
if (Navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 500,
    });
}
else {
    document.getElementById(map).innerHTML = "No support for Geolocation, we can't find your current location"
    }
};
function onSuccess(Position) {
    showMap(
        position.coords.latitude,
        position.coords.longitude,
    );

};

function onError() {
    var mapDiv = document.getElementById("error");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML = "User denied the request for Geolocation"
            break;
        case error.POSITION_UNVAILABLE:
            mapDiv.innerHTML = "Location information is unavailable"
            break;
        case error.TIME_OUT:
            mapDiv.innerHTML = "The request to get location is timedout"
            break;
        case error.UNKNOWN_ERROR:
            mapDiv.innerHTML = "An unknown error occurred"
            break;
    }
};

function showMap(lat, long) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.Directionsrenderer();

    var route = {
        origin: new google.maps.LatLng(lat, long),
        destination: "55 shibiri Road, Ajagbandi, Lagos",
        travelMode: new google.maps.DirectionsTravelMode.DRIVING
    };

var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(50.8504500, 4.3487800),
    mapTypeId: google.maps.mapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);
directionsRenderer.setMap(map);
directionsrenderer.setPanel(document.getElementById('driving-directions'));
directionsService.route(route, function (result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
        directionsrenderer.setDirections(result);
    }
});

}