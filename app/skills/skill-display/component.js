import Ember from 'ember';
import Projects from 'personal-site/skills/skills';
export default Ember.Component.extend({
    tagName:"div",
    attributeBindings:["title"],
    classNames:["skillBlock"],
    model: Ember.computed("modelId", function(){
        return Projects.skill.findBy("id", this.get("modelId"));
    })
});
