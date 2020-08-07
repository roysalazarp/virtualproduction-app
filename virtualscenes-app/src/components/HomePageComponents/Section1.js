import React from 'react';

const Section1 = () => {
  return (
    <section className="section1">
      <h1 className="section1--title">You will need this</h1>
      <div className="section1--list">
        <ul className="">
          <li>Vive Tracker with +2 basestations</li>
          <li>Video capture card (AV.io 4k)</li>
          <li>Camera with hdmi port (+hdmi)</li>
          <li>Greenscreen background</li>
        </ul>
      </div>
      <button className="btn">
        Try now
      </button>
    </section>
  );
}

export default Section1;
