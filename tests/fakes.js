import Ember from 'ember';

const {
  RSVP
} = Ember;

const FakeContact = Ember.Object.extend({
  getRecord(){
    return this;
  }
});

const FakeCrypto = Ember.Object.extend({
  decrypt: RSVP.resolve.bind(null, {base64: ''}),
  decodeBase64: RSVP.resolve.bind(null, {}),
  hashEmail: function () {
    return 'default hash';
  }
});

const FakeStore = Ember.Object.extend({
  query: RSVP.reject
});

const FakeUpdate = Ember.Object.extend({
  destroyRecord: RSVP.resolve
});

export {
  FakeContact,
  FakeCrypto,
  FakeStore,
  FakeUpdate
}