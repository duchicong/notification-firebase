import "./App.css";
import React, { useState } from "react";
import Notification from "./Notification";
import { getTokenFirebase, onMessageListener } from "./firebase";

export default function App() {
  const [show, setShow] = useState(false);
  const [isTokenFound, setTokenFound] = useState(false);
  const [notification, setNotification] = useState({
    title: '',
    body: ''
  });

  getTokenFirebase(setTokenFound);

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({ title: payload.notification.title, body: payload.notification.body });
    Notification.requestPermission((result) => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification(payload.notification.title, {body: payload.notification.body});
        });
      }
    });
    console.log('payload >>> ', payload);
  }).catch(err => {
    console.warn('failed: ', err);
  })

  return (
    <div className="App">
      <Notification open={show} onClose={() => setShow(false)} data={notification} />
      <h2>{isTokenFound ? 'Notification permission enabled' : 'Need notification permission!'}</h2>
    </div>
  );
}
