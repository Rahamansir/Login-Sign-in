import react, { useState } from 'react';
import Field from './Components/Field';
import Register from './Components/Alternate/Register';
import Login from './Components/Alternate/Login';

import './App.css';

function App() {
  const [register, toggle] = useState(true);

  const page = function change() {
    toggle(function (preValue) {
      return !preValue;
    });
  };
  return (
    <>
      {register ? <Register /> : <Login />}
      <button onClick={page}> Go to {register ? 'Login' : 'Register'}</button>
    </>
  );
}

export default App;
