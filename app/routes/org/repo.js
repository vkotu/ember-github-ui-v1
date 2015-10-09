import Ember from 'ember';

export default Ember.Route.extend({
  model(params){

    var repoName = params.repoid;
    var orgName = this.modelFor('org').id;
    //debugger;
    return $.get(`https://api.github.com/repos/${orgName}/${repoName}`).then( raw => {
      raw.oldId = raw.id;
      raw.id = raw.name;
      return raw;
    });

    //return Ember.RSVP.hash({
    //  issues:  $.get(`https://api.github.com/repos/${orgName}/${repoName}/issues`),
    //  contributors:$.get(`https://api.github.com/repos/${orgName}/${repoName}/contributors`)
    //
    //});


  }
});
