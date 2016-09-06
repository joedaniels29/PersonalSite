import Ember from 'ember';
import Poll  from '../../poll/poll';

export default Ember.Component.extend({
    idx: 0,
    tagName: "img",
    bindAttrs:["src"],

    src:Ember.computed("attrs.name","pch", function(){
        var src = this.get("name");
        var pch = this.get("pch");
        return `assets/${pch ? pch+"/": "" }${src}`;
    }),

    // classNameBindings:[""],
    didReceiveAttrs(){
        this._super(...arguments);



    },
    currentContent: Ember.computed("idx", "models", function(){
        return this.get("models").objectAt(this.get("idx")).split("");
    }),
    willDestroyElement(){
        this._super(...arguments);
        this.get("poll").stop();
        this.set("poll", null);
    }


});
