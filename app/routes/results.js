import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=fa966f56cda04703a3ab712e3d2a46ec&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
