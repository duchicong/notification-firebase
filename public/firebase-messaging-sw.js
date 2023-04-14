// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
// const fileSound = new Audio('./assets/mixkit.wav');
// const audio = fileSound.map(v => new Audio(v));

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyC25yLpt5bky0ji6QN_CvqHtPbD39PR1IY",
    authDomain: "push-notification-demo-8a13b.firebaseapp.com",
    projectId: "push-notification-demo-8a13b",
    storageBucket: "push-notification-demo-8a13b.appspot.com",
    messagingSenderId: "578550315157",
    appId: "1:578550315157:web:96a08ab5eed2d6acd1839c"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
// messaging.sound('./assets/mixkit.wav');

// use service worker
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', { payload});

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    sound: 'mixkit.wav',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);

  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(notificationTitle, notificationOptions);
      });
    }
  });
});


