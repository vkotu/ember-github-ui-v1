import Ember from 'ember';

export default Ember.Route.extend({


    //debugger;
    beforeModel() {
      this._super(...arguments);
      this.transitionTo('org.repos');
    }

});
