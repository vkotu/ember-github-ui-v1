import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var orgName = this.modelFor('org').id;
    var repoName = this.modelFor('org.repo').id;
var issues=  $.get(`https://api.github.com/repos/${orgName}/${repoName}/issues`);
    return $.get(`https://api.github.com/repos/${orgName}/${repoName}/issues`).then( raw => {
      raw.oldId = raw.id;
      raw.id = raw.name;
      return raw;
    });

   //debugger;
//return this.modelFor('org.repo');



  }
});
