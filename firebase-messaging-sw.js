importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBcXEY_eyRZKY2GbCSGbSCf4bM8J7z4rfA",
    authDomain: "solent-computing-society.firebaseapp.com",
    databaseURL: "https://solent-computing-society.firebaseio.com",
    projectId: "solent-computing-society",
    storageBucket: "solent-computing-society.appspot.com",
    messagingSenderId: "533900314169",
    appId: "1:533900314169:web:aefbe09960c68045c5efe8",
    measurementId: 'G-measurement-id',
    messagingSenderId: '533900314169',
});

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BKAhDaPyPBFZtwQq9w7RKRbKjFbAwLfCYL2I-dprXCNyqhWPSHuiszuFuCwt0OwgmGUKGVe0G6963qruCz2cfSc");

messaging.setBackgroundMessageHandler(function(payload){
    var obj = JSON.parse(payload.data.notification);
    var notificationTitle = obj.title;
    var notificationOptions = {
        body: obj.body,
        icon: obj.icon
    };
    return self.registration.showNotification(notificationTitle,notificationOptions);
});
