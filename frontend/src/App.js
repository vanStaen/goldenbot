import React, { useState } from "react";
import './App.css';

const App = () => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      ⚜️ Golden Circle ⚜️
      </header>
    </div>
  );
}

export default App;
