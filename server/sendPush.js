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


// For Alerts
function pushAlertNotificationsAPN (subject, text) {
    //  APN
    console.log('Step 2.APN start')
    // ServerLogs.insert({msg:'Step 2.APN start'})

    var tokensAPN = ApnTokens.find({}, {fields:{_id: 1}}).fetch();
    console.log('Step 3.APN after tokens find - ' + tokensAPN.length)
    // ServerLogs.insert({msg:'Step 3.APN after tokens find - ' + tokensAPN.length})
    if (tokensAPN.length != 0) {
      console.log('Step 4.APN, before tokensAPN.map')
      // ServerLogs.insert({msg: 'Step 4.APN, before tokensAPN.map'})
      tokensAPN.map(function (token) {
        console.log('Step 5.APN single apn token - ' + token._id);
      // ServerLogs.insert({msg: 'Step 5.APN single apn token - ' + token._id})
        var note = new APN.notification();
        note.setAlertText(subject + ' - ' + text);
        note.badge = 1;
        note.sound = "notification-beep.wav";
        service.pushNotification(note, token._id);
      });
    }

};
// For Alerts
function pushAlertNotificationsGCM (subject, text) {
    // GCM
    console.log('Step 2.GCM start')
    var tokensGCM = GcmTokens.find({}, {fields:{_id: 1}}).fetch();
    console.log('Step 3.GCM after tokens find - ' + tokensGCM.length)
    if (tokensGCM.length != 0) {
      console.log('Step 4.GCM, before tokensGCM.map')

    tokensGCM.map(function (token) {
      var message = new GCM.Message();
      console.log('Step 5.GCM, start mapping, - '+ token._id)
    //API Server Key
      var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');
      var pushToken = [];
      message.addData('message', text);
      message.addData('title', subject);
      message.addData('msgcnt','3');
      message.addData('soundname','beep.wav');
      message.timeToLive = 3000;
      pushToken.push(token._id)
      console.log(pushToken);
      sender.send(message, pushToken, 4, function (result) {
        console.log('Step 6.GCM, result - ' + result);

      });

    });
    }
};

function pushNotificationToManyGCM (title, message) {
      var message = new GCM.Message();
      console.log('GCM push')
    //API Server Key
      var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');

    // Value the payload data to send...
      message.addData('message', 'Sent from Local ' + message);
      message.addData('title', title );
      message.addData('msgcnt','3'); // Shows up in the notification in the status bar
      message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
    //message.collapseKey = 'demo';
    //message.delayWhileIdle = true; //Default is false
      message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

      /**
     * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
     */
      sender.send(message,["APA91bFaH7GRpn2hr-o--FggpKqogXjYPNRK4pGt-IBoKqNSijIv3PEbY7Zofn7h53yySEdVnMGna3h4-z7IAZIl1g8JAhnOZxnmmBYFl4-356twbmrb_6JJXzGVzV7IX_U7VlgXE-GM1gUTAAKUNpN5t9z_A9rijw"], 4, function (result) {
        console.log(result);
      });
  }

  function SendPrivateAPNpush (pushToken, subject, text) {
    var note = new APN.notification();
    note.setAlertText(subject + ' - ' + text);
    note.badge = 1;
    note.sound = "notification-beep.wav";
    service.pushNotification(note, pushToken);
  }

  function SendPrivateGCMpush (pushToken, subject, text) {
      var sender = new GCM.Sender('AIzaSyA6EQ4Jqk44zjeefxNwtC4L4XMve57Np8I');
      message.addData('message', text);
      message.addData('title', subject);
      message.addData('msgcnt','3'); // Shows up in the notification in the status bar
      message.addData('soundname','beep.wav'); //Sound to play upon notification receipt -
      message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing
      sender.send(message, pushToken, 4, function (result) {
        console.log('Step 6.GCM, result - ' + result);

      });

  }