import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('contact', params.id);
  },

  actions: {
    save() {
      const model = this.controller.get('model');
      model.save().then(() => 
        this.transitionTo('contacts.view', model));
    },

    cancel() {
      const model = this.controller.get('model');
      model.rollbackAttributes();
      this.transitionTo('contacts.view', model);
    },

    willTransition() {
      const model = this.controller.get('model');
      model.rollbackAttributes();
    }
  }
});