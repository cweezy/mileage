/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    role: {
      type: 'string'
    },

    email: {
      type: 'string',
      required: true,
      email: true
    },

    enryptedPassword: {
      type: 'string'
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.enryptedPassword;
      delete obj._csrf;
      return obj;
    }
    
  }

};
