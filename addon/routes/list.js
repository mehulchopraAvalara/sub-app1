import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{ display: 'Go to gym' }, 
            { display: 'Go to school' }, 
            { display: 'Code ember'} ];
    }
})