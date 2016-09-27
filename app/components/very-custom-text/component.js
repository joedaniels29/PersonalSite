import Ember from 'ember';

export default Ember.Component.extend({
  computedCss:Ember.computed.alias("css"),
  didRecieveAttrs() {
    this.__super();
    this.get("computedCss");
    this.$().css(this.get("computedCss"));
  }

});
