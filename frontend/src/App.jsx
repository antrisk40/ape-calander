import React from 'react';
//import DoctorCard from "./component/doctorcart/Cart"; // Make sure this path is correct
// import Carbonfootprint from "./component/doctorcart/Dashboard"; 
// import LandingPage from "./components/doctorcart/Homepage"
import LandingPage from './component/cart/Homepage.jsx';
import Login from './component/cart/Login.jsx'; 
import SignUpForm from './component/cart/SignUpForm.jsx';// Make sure this path is correct
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
      <Router>
        <Routes>
          <Route exact path="/Homepage" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUpForm} />
        </Routes>
      </Router>
        {/* <LandingPage /> */}
      </div>

      
    </>
  );
}

export default App;



