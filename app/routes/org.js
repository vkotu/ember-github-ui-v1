import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service(),
  model(params){
    //debugger;
   return $.get(`https://api.github.com/orgs/${params.id}`).then( raw => {
      raw.oldId = raw.id;
      raw.id = raw.login;
      return raw;
    });
  },
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
