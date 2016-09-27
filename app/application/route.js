import Ember from 'ember';
import Projects from 'personal-site/skills/skills';
export default Ember.Route.extend({
    model(){
        return Projects['skill'].map(o => o["name"]);
    }
});
