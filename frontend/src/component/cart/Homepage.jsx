import React from 'react';

const LandingPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(180deg, #000000 0%, #003294 100%)', // Background gradient
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Placeholder for Image */}
      <div
        style={{
          width: '200px',
          height: '200px',
          marginBottom: '20px',
        }}
      >
        <img
          src="pxl.jpg"
          alt="Calendar Icon"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Title */}
      <h1
        style={{
          color: '#FFFFFF',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '30px',
        }}
      >
        APE CALENDAR
      </h1>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button
          style={{
            width: '655px', // Updated width
            height: '75px', // Updated height
            fontSize: '20px', // Font size adjusted for larger button
            fontWeight: 'bold',
            color: '#000',
            backgroundColor: '#FFF',
            border: 'none',
            borderRadius: '10px 0px 0px 0px', // Updated border radius
            cursor: 'pointer',
            opacity: '1', // Ensure the button is visible
          }}
        >
          GET STARTED
        </button>
        <button
          style={{
            width: '655px', // Updated width
            height: '75px', // Updated height
            fontSize: '20px', // Font size adjusted for larger button
            fontWeight: 'bold',
            color: '#FFF',
            backgroundColor: '#000',
            border: 'none',
            borderRadius: '10px 0px 0px 0px', // Updated border radius
            cursor: 'pointer',
            opacity: '1', // Ensure the button is visible
          }}
        >
          I ALREADY HAVE AN ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
