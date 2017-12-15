import Component from '@ember/component';
import { inject as service} from '@ember/service';

export default Component.extend({
  maps: service(),

  didInsertElement() { // this runs during the component render after the markup has been inserted
    this._super(...arguments);
    let location = this.get('location'); // this is passed by the parent template - rental-listing.hbs
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
