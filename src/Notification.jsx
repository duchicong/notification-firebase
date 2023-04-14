import React from 'react';
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mixkit from './sound/mixkit.wav';

const Notification = (props) => {
    return (
        <Toast
        onClose={props.onClose}
        show={props.open}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <audio src={mixkit} type="audio/wav" autoPlay></audio>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{props.data.title}</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>{props.data.body}</Toast.Body>
      </Toast>
    )
}

export default Notification;
