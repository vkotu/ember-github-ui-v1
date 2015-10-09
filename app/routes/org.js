import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service(),
  setupController(controller){
    this._super(...arguments);
  controller.set('records',this.get('authentication.records'))
  },
  actions:{
    addToRecords(value){
     // alert(`hi ${value}`);
      this.get('authentication.records').addObject({id:value});
    }
  }
});
