import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var urlSubCom = 'https://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=fa966f56cda04703a3ab712e3d2a46ec';
    var urlHouseCom = 'https://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&chamber=house&subcommittee=false&apikey=fa966f56cda04703a3ab712e3d2a46ec';

    return Ember.RSVP.hash({
      subcom: Ember.$.getJSON(urlSubCom).then(function(responseJSON) {
        return responseJSON.results;
      }),
      house: Ember.$.getJSON(urlHouseCom).then(function(responseJSON) {
        return responseJSON.results;
      }),
    });
  },
});
