/**
 * secsy-webclient
 *
 * Copyright (c) 2016 Reto Inderbitzin <mail@indr.ch>
 *
 * For the full copyright and licence information, please view
 * the LICENSE file that was distributed with this source code.
 */

// https://github.com/ProtonMail/WebClient/blob/public/src/app/libraries/pmcrypto.js
// https://github.com/ProtonMail/WebClient/blob/public/src/app/services/storage.js

import Ember from 'ember';

export default {
  getRandomValues,
  
  encode_base64,
  decode_base64,
  
  arrayToBinaryString,
  binaryStringToArray,
  
  omit,
  pick,
  
  window
}

let crypto;
if (window.crypto && window.crypto.getRandomValues) {
  crypto = window.crypto;
} else if (window.msCrypto && window.msCrypto.getRandomValues) {
  crypto = window.msCrypto;
}

function getRandomValues (arr) {
  if (!crypto) {
    throw new Error('Browser does not support getRandomValues()');
  }
  return crypto.getRandomValues(arr);
}

function omit (obj, keys) {
  const result = Ember.copy(obj);
  if (!keys || keys.length === 0) {
    return result;
  }
  
  for (var i = 0, l = keys.length; i < l; i++) {
    delete result[keys[i]];
  }
  return result;
}

function pick (obj, keys) {
  const result = {};
  if (!keys || keys.length === 0) {
    return result;
  }
  
  for (var i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

function encode_base64 (data) {
  if (data !== undefined) {
    return btoa(data).trim();
  }
}

function decode_base64 (data) {
  if (data !== undefined) {
    return atob(data.trim());
  }
}

function binaryStringToArray (str) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}

function arrayToBinaryString (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = String.fromCharCode(arr[i]);
  }
  return result.join('');
}
