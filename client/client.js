Template.testMyPush.events({
  'click .js-sendMePush' : function (e, t) {
  	var userId = t.find('#pushTestInput').value
  	console.log(userId)
    Meteor.call('testPushServer', userId)
  },
  'click .js-sendMePushLocal' : function (e, t) {
  	var token = t.find('#pushTestInputLocal').value
  	console.log(token)
    Meteor.call('testPushServerLocal', token)
  }
});