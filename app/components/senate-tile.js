import Ember from 'ember';

export default Ember.Component.extend({
  isSenateShowing: false,
   actions: {
     showSenate() {
       this.set('isSenateShowing', true);
     },
     hideSenate() {
       this.set('isSenateShowing', false);
     },
   }
});
