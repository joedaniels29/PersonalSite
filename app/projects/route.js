import Ember from 'ember';
import Projects from './outline';

export default Ember.Route.extend({
    model(){
        var projects = [];
        for (var p in Projects) {
            projects = projects.concat(Projects[p]);
        }
        return projects;
    }

});
