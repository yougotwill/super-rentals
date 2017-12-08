import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api' //adds the api namespace for mirage so we don't make requests and pull local data instead
});
