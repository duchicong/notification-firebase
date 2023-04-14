import React from "react";

const HeaderTimeLine = (props) => {
    return (
        <div className="header">
            <div className="header-fixed">
                <div className="flex-1">1</div>
                <div className="flex-2">2</div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
export default HeaderTimeLine;
