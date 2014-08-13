apnCert = '';
apnKey = '';

Certificates.find().observe({
  added: function (ID, fields) {
    apnCert = fields.certificate;
    apnKey = fields.certKey;
    if (apnKey && apnCert) {
      establishAPNconnection()
    }
  }
});

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


var tokensDEMO = ["d2860e444551af4b0fef2f4acfb4b82727414d031c62b2f9d4fa905fb2da59a0", "28e1b151217db276b0a9478b455bc69b2a56c2723272b0442749f397f2408b16"];
establishAPNconnection = function () {


var service = new APN.connection({
  gateway:'gateway.sandbox.push.apple.com',
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
  var query = {
    push: true
  };
  query['pushSettings.' + pushType] = true;
  var users = Meteor.users.find(query, {fields: {tokensIOS: 1}});
  users.forEach(function (user) {
    if (user && (user.tokensIOS.length > 0)) {
        var note = new APN.notification();
        note.setAlertText(subject + ' - ' + message);
        note.badge = 1;
        note.sound = "notification-beep.wav";
        service.pushNotification(note, user.tokensIOS);
    }
  })
}

pushNotificationsToAllGCM = function (subject, message, pushType) {
  var query = {
    push: true
  };
  query['pushSettings.' + pushType] = true;
  var users = Meteor.users.find(query, {fields: {tokensAndroid: 1}});
  users.forEach(function (user) {
    if (user && (user.tokensAndroid.length > 0)) {
        var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');
        var pushToken = [];
        message.addData('message', message);
        message.addData('title', subject);
        message.addData('msgcnt','3');
        message.addData('soundname','beep.wav');
        message.timeToLive = 3000;
        sender.send(message, tokensAndroid, 4, function (result) {
          console.log('Step 6.GCM, result - ' + result);

        });
    }
  })
}

pushNotificationsToSingleAPN = function (userid, subject, message, pushType) {
  var query = {
    push: true
  };
  query['pushSettings.' + pushType] = true;

  var user = Meteor.users.findOne({_id: userid}, {fields: {tokensIOS: 1}})
  if (user && (user.tokensIOS.length > 0)) {
     var note = new APN.notification();
     note.setAlertText(subject + ' - ' + message);
     note.badge = 1;
     note.sound = "notification-beep.wav";
     service.pushNotification(note, user.tokensIOS);
  }
}

pushNotificationsToSingleGCM = function (userid, subject, message, pushType) {
  var query = {
    push: true
  };
  query['pushSettings.' + pushType] = true;

  var user = Meteor.users.findOne({_id: userid}, {fields: {tokensAndroid: 1}})
  if (user && (user.tokensAndroid.length > 0)) {

     var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');
     var pushToken = [];
     message.addData('message', message);
     message.addData('title', subject);
     message.addData('msgcnt','3');
     message.addData('soundname','beep.wav');
     message.timeToLive = 3000;
     sender.send(message, tokensAndroid, 4, function (result) {
       console.log('Step 6.GCM, result - ' + result);

     });
  }
}
