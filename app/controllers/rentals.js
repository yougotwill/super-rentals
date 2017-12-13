import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCity(param) {
            if (param !== '') { // if there are filter parameters
                return this.get('store').query('rental', {city: param});
            } else {
                return this.get('store').findAll('rental'); // will return all the rentals
            }
        }
    }
});
