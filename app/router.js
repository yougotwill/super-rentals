import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about'); // routes app to this page when you get to URL/about
  this.route('contact');
  this.route('rentals', function() { // this.route('index, { path: './'}); is implied
    this.route('show', { path: '/:rental_id'}); // this changes the URL of the sub route
    // rental_id is passed to the route
  });
});

export default Router;
