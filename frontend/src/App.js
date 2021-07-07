import React, { useState } from "react";
import { UserData } from "./components/UserData/UserData";
import { Login } from "./components/Login/Login";
import './App.css';


const App = () => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <span className="App-Title">⚜️ Golden Circle ⚜️</span>      
          {hasAccess ? <UserData/> : <Login/>}
      </header>
    </div>
  );
}

export default App;
