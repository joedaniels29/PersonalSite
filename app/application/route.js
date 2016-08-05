import Ember from 'ember';
import Projects from '../projects/outline';
export default Ember.Route.extend({
    model(){
        return Projects['skills'].map(o => o["name"]);
    }
});
