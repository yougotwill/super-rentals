import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        this.replaceWith('rentals') // sets the rentals route to be the main page
    }
});
