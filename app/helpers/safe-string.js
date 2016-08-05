import Ember from 'ember';
export default Ember.Helper.helper(function(safe) {
    return new Ember.Handlebars.SafeString(safe);
});