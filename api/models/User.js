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
      // admin, coach, or runner
      type: 'string',
      defaultsTo: 'runner'
    },

    email: {
      type: 'string',
      required: true,
      email: true
    },

    encryptedPassword: {
      type: 'string'
    },
  },

  isCoach: function () {
    this.role === 'coach' || this.role === 'admin'
  },

  toJSON: function () {
    var obj = this.toObject();
    delete obj.password;
    delete obj.confirmation;
    delete obj.enryptedPassword;
    delete obj._csrf;
    return obj;
  },

  beforeCreate: function (values, next) {
    sails.log( 'hello chris');
    // This checks to make sure the password and password confirmation match before creating record
    if (!values.password || values.password != values.confirmation) {
      return next({err: ["Password doesn't match password confirmation."]});
    }

    require('bcrypt').hash(values.password, 10, function (err, encryptedPassword) {
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      
      sails.log(encryptedPassword);
      sails.log(values);
      next();
    });
  }
};
