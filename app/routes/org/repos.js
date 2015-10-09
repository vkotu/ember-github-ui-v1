import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    var orgName = this.modelFor('org').id;
     var data =  $.get(`https://api.github.com/orgs/${orgName}/repos`);
    return data.then(raw => {
     return raw.map(x=> {
        x.oldId = x.id;
        x.id = x.name;
        return x;
      });
    });
  },
  setupController(controller){
    this._super(...arguments);
    controller.set('org',this.modelFor('org'));
  }
});
