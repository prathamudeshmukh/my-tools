import React, { useState } from 'react';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const getPhoneNumberLink = () => {
    const linkPhoneNumber = phoneNumber.startsWith("+91") ? phoneNumber : `+91${phoneNumber}`
    return `https://wa.me/${linkPhoneNumber}`
  }

  return (
    <div className="App">
      <header className="App-header">
        <div><label for="phoneNumber">Phone number</label></div>
        <div><input type="text" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)}  value={phoneNumber}/></div>
        <div><a class="App-link" href={getPhoneNumberLink()}>Open chat</a></div>
      </header>
    </div>
  );
}

export default App;
