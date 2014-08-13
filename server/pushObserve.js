var handlePush = Notifications.find({push: true, pushSent: {$exists: false}}).observeChanges({
    added: function (ID, doc) {
      switch (doc.publishType) {

        case 0:

          pushNotificationsToAllAPN(doc.title, doc.message, doc.pushType);
          pushNotificationsToAllGCM(doc.title, doc.message, doc.pushType);
          Notifications.update({_id: ID}, {$set: {pushSent: true}})
        break;

        case 1:

        break;

        case 2:
          pushNotificationsToSingleGCM(doc.userId, doc.title, doc.message, doc.pushType);
          pushNotificationsToSingleAPN(doc.userId, doc.title, doc.message, doc.pushType);
          Notifications.update({_id: ID}, {$set: {pushSent: true}})
        break;

        case 3:
          var singleAgenda = AgendaTimes.findOne({_id: doc.createdBy}, {fields: {attendedBy: 1}});
          if (singleAgenda && singleAgenda.attendedBy.length > 0) {
            singleAgenda.attendedBy.map(function (user) {
              pushNotificationsToSingleGCM(user.user, doc.title, doc.message, doc.pushType);
              pushNotificationsToSingleAPN(user.user, doc.title, doc.message, doc.pushType);
            })
          }

        break;
      }

    }
  });



