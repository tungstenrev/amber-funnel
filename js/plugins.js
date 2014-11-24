// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-70
        }, 1000);
        return false;
      }
    }
  });
});

//Google maps stuff

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 12,
    zoomControl: true,    
    scrollwheel: false,
    disableDoubleClickZoom: true,
    draggable: true,
    streetViewControl: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);  



      var contentString = '<div id="so-info">'+                       
            '<img class="avatar round-image" src="http://placepic.me/avatars/50-50" />'+
            '<h4>John XXXX</h4>'+ 
            '<p>Age: <span id="so-age">xx</span> Convictions: <span id="so-conv">5</span></p>'+
            '<p>Address: <span id="so-address">xxx Roosevelt Blvd.</span></p> '+
            '<a href="#scrollto-signup" class="cta-link">Sign up</a> '+
            '</div>';


      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: pos,
        map: map
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      map.setCenter(pos);
      map.panBy(0, -100); 
      $("#map-canvas").css("background", "none");          

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  // var options = {
  //   map: map,
  //   position: new google.maps.LatLng(60, 105),
  //   content: content
  // };

  //var infowindow = new google.maps.InfoWindow(options);
  //map.setCenter(options.position);
}

  //
  // Default DomListener event from Google
  //
  // google.maps.event.addDomListener(window, 'load', initialize);


  //
  // Use jQuery to bypass the default DomListener event from Google
  // Trigger the geolocation from Google Maps on click
  // 
  
  $( "#geolocation, #geolocation-menu, .geo-trigger" ).on( "click", function() {
    $(initialize);
  });



  