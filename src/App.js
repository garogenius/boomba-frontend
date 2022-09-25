import './App.css';
import React from 'react';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <h2>Login with Google</h2>

      <GoogleLogin
        clientId="94713881842-9jepfp8qaiit50kk80bnj6e6mjhtshhp.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
