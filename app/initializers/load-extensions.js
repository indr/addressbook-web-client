/*jshint unused:false*/
import AdapterError from './../extensions/AdapterError';
import BsButton from './../extensions/bs-button';
import BsFormElement from './../extensions/bs-form-element';
import BsInput from './../extensions/bs-input';
import Model from './../extensions/Model';
import RSVP from './../extensions/RSVP';

export function initialize (/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'load-extensions',
  initialize
};
