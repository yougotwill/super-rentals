import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        // query var returned with the filter results saying what the parameters were for filtering
        filterByCity(param) {
            if (param !== '') { // if there are filter parameters
                return this.get('store').query('rental', {city: param}).then((results) => {
                        return {query: param, results: results};
                    });
            } else {
                return this.get('store').findAll('rental').then((results) => {
                    return {query: param, results: results};
                }); // will return all the rentals
            }
        }
    }
});
