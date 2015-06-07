/**
 * Field.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      index: true,
    },
    identifier: {
      type: 'string',
      required: true,        
      regex: /^[a-zA-Z0-9-_]+$/,
      index: true,
    },
    conf: {
      type: 'json',
      required: true
    },
    bundle: {
      model: 'bundle',
    }
  }
};
