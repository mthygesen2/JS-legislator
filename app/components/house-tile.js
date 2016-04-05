import Ember from 'ember';

export default Ember.Component.extend({
  isHouseShowing: false,
  actions: {
    showHouse() {
      this.set('isHouseShowing', true);
    },
    hideHouse() {
      this.set('isHouseShowing', false);
    },
  }
});
