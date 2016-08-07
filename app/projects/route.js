import Ember from 'ember';
import Projects from './outline';

export default Ember.Route.extend({
    model(){
        var projects = [];
        for(var p in Projects){
            if (p=='skills') continue;
            projects = projects.concat(Projects[p]);
        }
        return projects;
    }

});
