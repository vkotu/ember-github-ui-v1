import Ember from 'ember';

export default Ember.Route.extend({
  model(params,transition){
    return [
      {id: "emberjs"},
      {id: "ember-cli"},
      {id: "microsoft"},
      {id: "yahoo"},
      {id: "netflix"},
      {id: "facebook"}
    ];
}
});
