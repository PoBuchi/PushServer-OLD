var handlePush = Notifications.find({push: true, pushSent: {$exists: false}}).observeChanges({
    added: function (ID, fields) {
      switch (fields.publishType) {

        case 0:

          pushNotificationsToAllAPN(fields.title, fields.message, fields.pushType);
          pushNotificationsToAllGCM(fields.title, fields.message, fields.pushType);
          Notifications.update({_id: ID}, {$set: {pushSent: true}})
        break;

        case 1:

        break;

        case 2:
        pushNotificationsToSingleGCM(fields.userId, fields.title, fields.message, fields.pushType);
        pushNotificationsToSingleAPN(fields.userId, fields.title, fields.message, fields.pushType);
        Notifications.update({_id: ID}, {$set: {pushSent: true}})
        break;
      }

    }
  });



