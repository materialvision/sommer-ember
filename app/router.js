import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news', { path: '/news' });
  this.route('works', { path: '/works' });
  this.route('bio', { path: '/bio' });
  this.route('rss', { path: '/rss' });
  this.resource('pages', { path: '/pages/:page_id' });
});

export default Router;
