import React from "react";
import { hoursRenderer } from "../../helper/timline";
import './style.css';

const Timeline = () => {
  return (
    <div className="gz-timeline">
      <div className="container-timeline">
        <div className="ofs-timeline">
          <div className="ofs-timeline-legend">
            {hoursRenderer({ className: 'hour-label', title: '시' })}
          </div>
          <div className="ofs-timeline-track">
            <div className="employee">
              <div className="employee-inner-wrap">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="60"
                  height="60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: 100x100"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text className="h4" x="25%" y="50%" fill="#666" dy=".4em">
                    JD
                  </text>
                </svg>
                <h5 className="mt-3">John Doe</h5>
              </div>
            </div>
            <div
              className="ofs-timeline-item
                  timeline-item 
                  start-0800 
                  end-0900"
            >
              <h6>Some street</h6>
            </div>
            <div className="ofs-timeline-item start-0930" data-duration="90">
              <h6>width set thru data-duration</h6>
            </div>

            <div className="ofs-timeline-item start-1200 end-1300">
              <h6>Some street</h6>
            </div>

            <div className="scrollbar-enabler"></div>
          </div>
          <div className="ofs-timeline-track">
            <div className="employee">
              <div className="employee-inner-wrap">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="60"
                  height="60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: 100x100"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text className="h4" x="25%" y="50%" fill="#666" dy=".4em">
                    JD
                  </text>
                </svg>
                <h5 className="mt-3">John Doe</h5>
              </div>
            </div>

            <div
              className="ofs-timeline-item 
                  start-0830 
                  end-0900"
            >
              <h6>Some street</h6>
            </div>
            <div className="ofs-timeline-item start-1000" data-duration="60">
              <h6>width set thru data-duration</h6>
            </div>

            <div className="ofs-timeline-item start-1200 end-1300">
              <h6>Some street</h6>
            </div>

            <div className="scrollbar-enabler"></div>
          </div><div className="ofs-timeline-track">
            <div className="employee">
              <div className="employee-inner-wrap">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="60"
                  height="60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: 100x100"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text className="h4" x="25%" y="50%" fill="#666" dy=".4em">
                    JD
                  </text>
                </svg>
                <h5 className="mt-3">John Doe</h5>
              </div>
            </div>

            <div
              className="ofs-timeline-item 
                  start-0830 
                  end-0900"
            >
              <h6>Some street</h6>
            </div>
            <div className="ofs-timeline-item start-1000" data-duration="60">
              <h6>width set thru data-duration</h6>
            </div>

            <div className="ofs-timeline-item start-1200 end-1300">
              <h6>Some street</h6>
            </div>

            <div className="scrollbar-enabler"></div>
          </div><div className="ofs-timeline-track">
            <div className="employee">
              <div className="employee-inner-wrap">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="60"
                  height="60"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: 100x100"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text className="h4" x="25%" y="50%" fill="#666" dy=".4em">
                    JD
                  </text>
                </svg>
                <h5 className="mt-3">John Doe</h5>
              </div>
            </div>

            <div
              className="ofs-timeline-item 
                  start-0830 
                  end-0900"
            >
              <h6>Some street</h6>
            </div>
            <div className="ofs-timeline-item start-1000" data-duration="60">
              <h6>width set thru data-duration</h6>
            </div>

            <div className="ofs-timeline-item start-1200 end-1300">
              <h6>Some street</h6>
            </div>

            <div className="scrollbar-enabler"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
