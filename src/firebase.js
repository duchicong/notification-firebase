// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// import { messaging } from './firebase-messaging-sw';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getTokenFirebase = (setTokenFound) => {
    return getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY })
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
        return onMessage(messaging, payload => {
            new Notification(payload.notification.title, {
                body: payload.notification.body
            });
            resolve(payload);
        });
    });
}

function registerEnvIntoSW() {
    if ("serviceWorker" in navigator) {
        console.log("Registration started", navigator);
        const config = encodeURIComponent(
            JSON.stringify(firebaseConfig)
        );

        navigator.serviceWorker
            .register(
            `${window.location.origin}/firebase-messaging-sw.js?firebaseConfig=${config}`
            )
            .then(function (registration) {
            console.log("Registration successful, scope is:", registration.scope);
            })
            .catch(function (err) {
            console.log("Service worker registration failed, error:", err);
            });
    }
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
    //   registerEnvIntoSW();
})()
