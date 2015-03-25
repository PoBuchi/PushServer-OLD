Meteor.methods({
  testPushServer: function (userId) {
    pushNotificationsToSingleAPN(userId, 'Testing push', 'Push Message', "privateMSG");
  },
  testPushServerLocal: function (tokens) {
    pushNotificationsToSingleAPNtest([tokens], 'Testing push', 'Push Message local', "privateMSG");
  }
});