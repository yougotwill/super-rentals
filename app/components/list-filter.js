import Component from '@ember/component';

export default Component.extend({
    classNames: ['list-filter'],
    value: '',
    init() { // the init hook - seeds the filter action with an empty value to return all the listings
        this._super(...arguments);
        // invokes the parent action "filter"
        // passed by calling the object, known as closure actions (grabbing functions or actions from parent components and using them in the child)
        // a promise is return by the filter object and .then occurs
        // promise - a JavaScript object that represents the result of an asynchronous function.
        this.get('filter')("").then((allResults) => {
            this.set('results', allResults.results);
        });
    },

    actions: {
        handleFilterEntry() { // calls the filter function based on the value attribute passed by the {{input}} helper
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            filterAction(filterInputValue).then((filterResults) => {
                if (filterResults.query === this.get('value')) { // ensures that we are in sync
                    this.set('results', filterResults.results);
                }
            });
        }
    }
});
