import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  model(params,transition){
    return [

      {id: "ember-cli"},
      {id: "microsoft"},
      {id: "yahoo"},
      {id: "netflix"},
      {id: "facebook"}
    ];


},

  actions:{
    addToFav(value){

      this.get('favorites').favoriteItem(value);

      //var x = this.get('favorites.items').map(x => {return x.id});
      //console.log(x.join(', '));
    }
  }
});
