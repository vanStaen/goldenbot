import React, { useState, useCallback, useEffect } from "react";
import { Input } from "antd";

import "./Login.css";

export const Login = (props) => {
  const [codeFromInput, setCodeFromInput] = useState(undefined);

  const handlerInputChange = (e) => {
    setCodeFromInput(e.target.value);
    console.log(process.env.ACCESS_PWD);
  };

  const keyDownListener = useCallback(
    (event) => {
      const keyPressed = event.key.toLowerCase();
      if (keyPressed === "enter") {
        props.setHasAccess(true);
      }
    },
    [props, codeFromInput]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownListener);
    return () => {
      document.removeEventListener("keydown", keyDownListener);
    };
  }, [keyDownListener]);

  return (
    <div>
      <Input.Password
        id="code"
        onChange={handlerInputChange}
        placeholder="input code & confirm with enter"
        className="passwordInput"
      />
    </div>
  );
};
