Certificates.allow({
  insert: function (userId) {
    return false
  },
  update: function (userId) {
    return false
  },
  remove: function (userId) {
    return false
  }
 });

Meteor.users.allow({
  insert: function (userId) {
    return false
  },
  update: function (userId) {
    return false
  },
  remove: function (userId) {
    return false
  }
 });

Notifications.allow({
  insert: function (userId) {
    return false
  },
  update: function (userId) {
    return false
  },
  remove: function (userId) {
    return false
  }
 });