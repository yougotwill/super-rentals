import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('rental'); // uses ember data to store and retrieve the data via the /api adaptor
    }
});
