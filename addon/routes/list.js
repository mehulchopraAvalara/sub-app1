import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Go to gym', 'Go to school', 'Code ember'];
    }
})