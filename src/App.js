import React from 'react';
import Countdown from './Countdown';

const App = () => {
  const endDate = new Date('2029-04-23T00:00:00');
  return (
    <>
      <div className="container-fluid h-100">
      {/*  */}
        <div className="row h-100">
          <div className="col-lg-12 d-flex flex-column justify-content-end align-items-center shadow rounded">
            <h1 className="mt-auto mb-2 display-4">The <span className="fw-bold">Backup Plan</span> Pact</h1>
            <h6 className="mb-3">Set to be either extended till 2032 or to be completed on 23<sup>rd</sup> April 2029.</h6>
            <div className="mx-5 mb-auto">
              <Countdown date={endDate} />
            </div>
            <small className="text-center">Crafted with ❤️ by <a href="https://kiwiyaaa.vercel.app" className="text-decoration-none text-white fw-bold">Kiwi</a></small>
            <div className="mb-3"></div>
          </div>
        </div>
       
      </div>



    </>
  );
};

export default App;
