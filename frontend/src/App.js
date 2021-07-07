import React, { useState } from "react";
import { UserData } from "./components/UserData/UserData";
import './App.css';

const App = () => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <span className="App-Title">⚜️ Golden Circle ⚜️</span>
      <UserData/>
      </header>
    </div>
  );
}

export default App;
