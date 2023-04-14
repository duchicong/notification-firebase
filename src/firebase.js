// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getMessaging as getMessagingSW } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

// import { messaging } from './firebase-messaging-sw';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC25yLpt5bky0ji6QN_CvqHtPbD39PR1IY",
  authDomain: "push-notification-demo-8a13b.firebaseapp.com",
  projectId: "push-notification-demo-8a13b",
  storageBucket: "push-notification-demo-8a13b.appspot.com",
  messagingSenderId: "578550315157",
  appId: "1:578550315157:web:96a08ab5eed2d6acd1839c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getTokenFirebase = (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BD8IYv8_Gy75ITvD3sY4B7ifUFx04Y06rIuxJvVVF42tLJ5v45MoM_dW0CSQtjcfUkzd-R8d1ZtGQFhehHHsEv4' })
        .then(currentToken => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);
                setTokenFound && setTokenFound(true);
            } else {
                console.log('No registration token available. Request permission to generate one.');
                setTokenFound && setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch(err => {
            console.log('An error occurred while retrieving token. ', err);
            // catch error while creating client token
        });
}

export const onMessageListener = () => {
    return new Promise(resolve => {
        console.log('runnnnnnn')
        return onMessage(messaging, payload => {
            new Notification(payload.notification.title, {
                body: payload.notification.body
            });
            resolve(payload);
        });
    });
}


(function requestPermission() {
    Notification.requestPermission((result) => {
        console.log('Notification.requestPermission ', result);
        if (result === "granted") {
            getTokenFirebase();
        } else {
            console.log('failed: ', result)
        }
      });
      console.log('Notification ', Notification)
})()
// const messagingSW = getMessagingSW();
// onBackgroundMessage(messaging, function (payload) {
//     const self = this;
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
