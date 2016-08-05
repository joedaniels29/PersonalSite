import Ember from 'ember';
import Poll  from '../../poll/poll';

export default Ember.Component.extend({
    idx: 0,
    classNameBindings:[":lett-r-container"],
    didReceiveAttrs(){
        this._super(...arguments);
        var poll = this.get("poll");
        if (poll) {
            poll.stop();
            this.set("poll", null);
        }
        var dis = this;
        this.set("poll", Poll.create({
                onPoll: () => {
                    var idx = dis.get("idx");
                    var models = dis.get("models");
                    this.set("idx", (idx+1) % models.get("length"));
                }
            })
        );
        this.get("poll").start();
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
