import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview,{
  // location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path:"/resume"});

  this.route('projects', {path:"/"}, function() {
    // this.route('index');
    // this.route('epiwatch');
    // this.route('oasis');
    // this.route('resident-worklist');
    this.route('credits');
    // this.route('achievements');
    this.route('glob', {path: ':project'});
  });
});

export default Router;
