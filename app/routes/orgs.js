import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  model(params,transition){
    return new Ember.RSVP.Promise((resolve,reject) => {
      Ember.run.later(() => {
        resolve([

          {id: "ember-cli"},
          {id: "microsoft"},
          {id: "yahoo"},
          {id: "netflix"},
          {id: "facebook"}
        ]) ;
      },1000);
    });

},

  actions:{
    addToFav(value){

      this.get('favorites').favoriteItem(value);

      //var x = this.get('favorites.items').map(x => {return x.id});
      //console.log(x.join(', '));
    }
  }
});
