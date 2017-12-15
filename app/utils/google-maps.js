import EmberObject from '@ember/object';

const google = window.google;

export default EmberObject.extend({
  init() {
    this.set('geocoder', new google.maps.Geocoder()); // geocoder is used to look up location coordinates
  },

  createMap(element, location) { // this creates the Google Maps element
    let map = new google.maps.Map(element, {scrollwheel: false, zoom: 10});
    this.pinLocation(location, map);
    return map;
  },
  
  pinLocation(location, map) { // pins the map based on the resolved location
    this.get('geocoder').geocode({address: location}, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let geometry = result[0].geometry.location;
        let position = {lat: geometry.lat(), lng: geometry.lng() };
        map.setCenter(position);
        new google.maps.Marker({ position, map, title: location});
      }
    });
  }

});
