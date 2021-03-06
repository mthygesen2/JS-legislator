import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('house', {path: '/house/:committee_id'});
  this.route('senate', {path: '/senate/:committee_id'});
});

export default Router;
