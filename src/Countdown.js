import React, { useState, useEffect } from 'react';

const Countdown = ({ date }) => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = date - now;
      setCountdown(distance);
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 counter-boxes-holder mb-3">
        <div className="counter-boxes">
          <h2 className="mb-0 display-5 fw-bold">{days}</h2>
          <h4 className="mb-0">Days</h4>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-boxes-holder mb-3">
        <div className="counter-boxes">
        <h2 className="mb-0 display-5 fw-bold">{hours}</h2>
          <h4 className="mb-0">hours</h4>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-boxes-holder mb-3">
        <div className="counter-boxes">
        <h2 className="mb-0 display-5 fw-bold">{minutes}</h2>
          <h4 className="mb-0">Minutes</h4>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-boxes-holder mb-3">
        <div className="counter-boxes">
        <h2 className="mb-0 display-5 fw-bold">{seconds}</h2>
          <h4 className="mb-0">Seconds</h4>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
