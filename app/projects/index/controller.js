import Ember from 'ember';

export default Ember.Controller.extend({
    tagName:"article",
    id:"project",
    actions:{
        transition(){
            this.transitionToRoute(...arguments);
        }
    }

});
