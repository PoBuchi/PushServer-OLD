Meteor.publish('agendaList', function () {
  return Agenda.find({}, {fields: {sesionname: 1, description: 1}})
})
Meteor.publish('agendaTimeList', function () {
  return AgendaTimes.find({}, {fields: {agendaspeakers: 1, agendaId: 1, locationName: 1, starttime: 1, endtime: 1}})
})
Meteor.publish('agendaSpeakers', function () {
  return Meteor.users.find({speaker: true}, {fields:{'fullName': 1, 'picture': 1, 'company': 1, 'position': 1, 'profile.about': 1, 'addedTo': 1}})
})