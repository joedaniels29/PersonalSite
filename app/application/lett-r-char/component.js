import Ember from 'ember';

export default Ember.Component.extend({
   tagName:"span",
   attributeBindings:["data-letter","data-idx"],
   "data-letter": Ember.computed.oneWay("letter"),
   "data-idx": Ember.computed.oneWay("idx")
});