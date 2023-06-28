import React from 'react';
import Countdown from './Countdown';

const App = () => {
  const endDate = new Date('2023-06-28T12:00:00');
  return (
    <>
      <div className="container-fluid h-100 bg-glow">
      {/*  */}
        <div className="row h-100">
          <div className="col-lg-12 d-flex flex-column justify-content-end align-items-center shadow rounded">
            <h1 className="mt-auto mb-2 display-4">The <span className="fw-bold">එයාව</span> meet වෙන දවස</h1>
            <h6 className="mb-3">Set to be to be completed on 28<sup>th</sup> June 2023.</h6>
            {/* <h6 className="mb-3">Set to be to be completed on 26<sup>th</sup> May 2024.</h6> */}
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
