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

// AgendaTimes = new Meteor.Collection('agendatimes')
// Agenda = new Meteor.Collection('agenda');

// // Meteor.subscribe('agendaList');
// // Meteor.subscribe('agendaTimeList');
// // Meteor.subscribe('agendaSpeakers');

// Template.agenda.helpers({
//   Speaker: function () {
//     return Meteor.users.findOne({_id: Session.get('active_Speaker')})
//   }
// })

// Template.agendaList.helpers({
//   agendaTimes: function () {
//     return AgendaTimes.find({},{sort: {starttime: 1}})
//   }
// })

// Template.agendaListItem.helpers({
//   agenda: function () {
//     return Agenda.findOne({_id: this.agendaId})
//   },
//   speakers: function () {
//     return Meteor.users.find({'addedTo': {$in : [this._id]}}, {fields: {fullName: 1}}).count() > 0 ? true : false
//   },
//   agendaSpeakers: function () {
//     return Meteor.users.find({'addedTo': {$in : [this._id]}}, {fields: {fullName: 1}})
//   },
//   dateHelper: function () {
//     return moment(this.starttime).format('dddd Do MMMM')
//   },
//   startHelper: function () {
//     return moment(this.starttime).format('HH.mm');
//   },
//   endHelper: function () {
//     return moment(this.endtime).format('HH.mm');
//   },
// });

// Template.agendaListItem.events({
//   'click .js-setSpeakerId': function () {
//     Session.set('active_Speaker', this._id)
//   }
// })