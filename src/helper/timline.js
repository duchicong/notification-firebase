import React from "react";

const hoursRenderer = (props) => {
    return [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(hour => (
        <div {...props}>{hour + props.title}</div> 
    ));
}

export {
    hoursRenderer
}