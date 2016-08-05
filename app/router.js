import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  // location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path:"/"});

  this.route('projects', function() {
    // this.route('index');
    // this.route('epiwatch');
    // this.route('oasis');
    // this.route('resident-worklist');
    // this.route('peer-review');
    // this.route('achievements');
    this.route('glob', {path: ':project'});
  });
});

export default Router;
