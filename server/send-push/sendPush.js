
// openssl s_client -connect gateway.push.apple.com:2195 -cert cert.pem -key key.pem
// Create a connection to the service using mostly default parameters.

// var options = {
//     gateway: 'gateway.sandbox.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
//     errorCallback: callback,
//     cert: 'PushChatCert.pem',
//     key:  'PushChatKey.pem',
//     passphrase: '`q1w2e3',
//     port: 2195,
//     enhanced: true,
//     cacheLength: 100
// }

establishAPNconnection = function () {
console.log('%c establishAPNconnection ()   ',  'background: #5D76DB; color: white; padding: 1px 15px 1px 5px;');

service = new APN.connection({
  gateway:'gateway.push.apple.com',
  certData: apnCert,
  keyData:  apnKey,
  passphrase: '`q1w2e3r4t5',
   });

service.on('connected', function() {
    console.log("APN Connected");
    // ServerLogs.insert({msg:'APN Connected'})
});

service.on('transmitted', function(notification, device) {
    var log = "APN Notification transmitted to:" + device.token.toString('hex');
    // ServerLogs.insert({msg:log})
    console.log(log)


});

service.on('transmissionError', function(errCode, notification, device) {
  var log = "APN Notification caused error: " + errCode + " for device ", device, notification;
    // ServerLogs.insert({msg:log})
    console.error(log);


});

service.on('timeout', function () {
  var log = "APN Connection Timeout"
    // ServerLogs.insert({msg:log})
    console.log(log);
  });

service.on('disconnected', function() {
    var log = "APN Disconnected from APNS";
    // ServerLogs.insert({msg:log})
    console.log(log)
  });

service.on('socketError', function () {
  var log = "APN socekt error = " + console.error;
    // ServerLogs.insert({msg:log})
  console.log(log)

});

}

pushNotificationsToAllAPN = function (subject, message, pushType) {
  console.log('pushNotificationsToAllAPN 1', pushType)
  var query = {
    push: true
  };
  query['pushSettings.' + pushType] = true;
  var users = Meteor.users.find(query, {fields: {tokensIOS: 1}});
  console.log('pushNotificationsToAllAPN 2 users', users.count())
  users.forEach(function (user) {
  console.log('pushNotificationsToAllAPN 3 user', users)

    if (user && user.tokensIOS && user.tokensIOS.length) {
        var note = new APN.notification();
        note.setAlertText(subject + ' - ' + message);
        note.badge = 1;
        note.sound = "notification-beep.wav";
        console.log('pushNotificationsToAllAPN 4 before send', note)
        service.pushNotification(note, user.tokensIOS);
    }
  })
}

pushNotificationsToAllGCM = function (subject, text, pushType) {
  console.log('pushNotificationsToAllGCM 1')
  var query = {
    push: true
  };
  query['pushSettings.' + pushType] = true;
  var users = Meteor.users.find(query, {fields: {tokensAndroid: 1}});
  console.log('pushNotificationsToAllGCM 2 users', users.count())
  users.forEach(function (user) {
    if (user && user.tokensAndroid && user.tokensAndroid.length) {
      console.log('pushNotificationsToAllGCM 3 user', users)
      var message = new GCM.Message();
        var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');
        var pushToken = [];
        message.addData('message', text);
        message.addData('title', subject);
        message.addData('msgcnt','3');
        message.addData('soundname','beep.wav');
        message.timeToLive = 3000;
        console.log('pushNotificationsToAllGCM 4 before send', message)
        sender.send(message, user.tokensAndroid, 4, function (result) {
          console.log('Step 6.GCM, result - ' + result);

        });
    }
  })
}

pushNotificationsToSingleAPN = function (userid, subject, message, pushType) {
  var query = {
    _id: userid
  };
  query['pushSettings.' + pushType] = true;

  var user = Meteor.users.findOne(query, {fields: {tokensIOS: 1}})
  if (user && user.tokensIOS && user.tokensIOS.length) {
     var note = new APN.notification();
     note.setAlertText(subject + ' - ' + message);
     note.badge = 1;
     note.sound = "notification-beep.wav";
     service.pushNotification(note, user.tokensIOS);
  }
}

pushNotificationsToSingleGCM = function (userid, subject, text, pushType) {
  var query = {
    _id: userid
  };
  query['pushSettings.' + pushType] = true;

  var user = Meteor.users.findOne(query, {fields: {tokensAndroid: 1}})
  if (user && user.tokensAndroid && user.tokensAndroid.length) {
    var message = new GCM.Message();
     var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');
     var pushToken = [];
     message.addData('message', text);
     message.addData('title', subject);
     message.addData('msgcnt','3');
     message.addData('soundname','beep.wav');
     message.timeToLive = 3000;
     sender.send(message, user.tokensAndroid, 4, function (result) {
       console.log('Step 6.GCM, result - ' + result);

     });
  }
}


apnCert = '';
apnKey = '';

Certificates.find().observe({
  added: function (fields) {
    console.log('observeStarted', fields)
    if (fields && fields.certificate && fields.certKey) {

    apnCert = fields.certificate;
    apnKey = fields.certKey;
    if (apnKey && apnCert) {
      establishAPNconnection()
    }
    }
  }
});
