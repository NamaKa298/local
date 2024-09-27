import Banner from './Banner'
import SignIn from './SignIn'
import CreateAnAccount from './CreateAnAccount'
import '../App.css';
import React, { useState } from 'react';

function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleCreateAccountClick = () => {
    setShowSignIn(false);
  };

  return (
    <div>
      <Banner />
      <div className="auth-container">
      {showSignIn ? (
          <SignIn onCreateAccountClick={handleCreateAccountClick} />
        ) : (
          <CreateAnAccount />
        )}
      </div>
    </div>
  )
}

export default App
