import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var urlHouseCom ='http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=fa966f56cda04703a3ab712e3d2a46ec';
    var urlSenanteCom ='http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=fa966f56cda04703a3ab712e3d2a46ec';
    
    return Ember.RSVP.hash({
     house: Ember.$.getJSON(urlHouseCom).then(function(responseJSON){
       return responseJSON.results;
     }),

     senate: Ember.$.getJSON(urlSenanteCom).then(function(responseJSON){
       return responseJSON.results;
     }),
   });
 },
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
