import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('rental', params.rental_id); // show route will retrieve the requested rental
    // gievn that :rental_id is given in router.js then it can be used in our model hook
  }
});
