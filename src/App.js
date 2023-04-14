import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Notification from "./Notification";
import { getTokenFirebase, onMessageListener } from "./firebase";
// import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "./component/timeline";
import HeaderTimeLine from "./component/timeline/Header";

export default function App() {
  const [show, setShow] = useState(false);
  const [isTokenFound, setTokenFound] = useState(false);
  const [notification, setNotification] = useState({
    title: '',
    body: ''
  });

  getTokenFirebase(setTokenFound);

  // React.useEffect(() => {
    // console.log('run');
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
  // });


  // React.useEffect(() => {
  //   function showNotification() {
  //     Notification.requestPermission((result) => {
  //       if (result === "granted") {
  //         navigator.serviceWorker.ready.then((registration) => {
  //           registration.showNotification("Vibration Sample", {
  //             body: "Buzz! Buzz!",
  //             icon: "../images/touch/chrome-touch-icon-192x192.png",
  //             vibrate: [200, 100, 200, 100, 200, 100, 200],
  //             tag: "vibration-sample",
  //           });
  //         });
  //       }
  //     });
  //   }
  //   showNotification();
  // });

  return (
    <div className="App">
      <Notification open={show} onClose={() => setShow(false)} data={notification} />
      <h2>{isTokenFound ? 'Notification permission enabled' : 'Need notification permission!'}</h2>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header> */}
      <HeaderTimeLine>
        <Timeline />
      </HeaderTimeLine>
    </div>
  );
}
