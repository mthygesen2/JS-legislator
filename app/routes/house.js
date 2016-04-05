import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=fa966f56cda04703a3ab712e3d2a46ec';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
 },
 showList: false,
 actions: {
   subcommsShow() {
     this.set('showList', true);
   }
 }
});
