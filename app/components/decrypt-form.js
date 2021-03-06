/**
 * secsy-webclient
 *
 * Copyright (c) 2016 Reto Inderbitzin <mail@indr.ch>
 *
 * For the full copyright and licence information, please view
 * the LICENSE file that was distributed with this source code.
 */

import Ember from 'ember';
import TrackerMixin from './../mixins/tracker-mixin';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  passphrase: {
    validators: [
      validator('presence', true),
      validator('length', {min: 8, max: 64})
    ]
  }
});

export default Ember.Component.extend(TrackerMixin, Validations, {
  keychain: Ember.inject.service(),
  session: Ember.inject.service(),
  
  passphrase: null,
  
  actions: {
    decrypt() {
      const self = this;
      const keychain = self.get('keychain');
      const flash = self.get('flashMessages');
      
      const userId = self.get('session.data.authenticated.id');
      const passphrase = this.get('passphrase');
      
      flash.infoT('decrypt.decrypting', {sticky: true});
      this.track('decryptState', keychain.open(userId, passphrase)).then(() => {
        flash.clearMessages();
      }).catch((error) => {
        if (error.message.indexOf('Invalid passphrase') >= 0) {
          flash.dangerT('errors.invalid-passphrase');
        }
        else {
          flash.dangerT('decrypt.unknown-error', error);
        }
      });
    },
    
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
