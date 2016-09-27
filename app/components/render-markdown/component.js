import Ember from 'ember';

export default Ember.Component.extend({
    ext:{


    },
    didReceiveAttrs() {
        this._super(...arguments);
        return Ember.$.get(this.get("url")).then((x) => this.set("content",x ));
    }
});
