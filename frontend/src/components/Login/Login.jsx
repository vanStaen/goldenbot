import React, { useState, useCallback, useEffect } from "react";
import { Input, notification } from "antd";

import "./Login.css";

export const Login = (props) => {
  const [codeFromInput, setCodeFromInput] = useState(undefined);

  const handlerInputChange = (e) => {
    setCodeFromInput(e.target.value);
  };

  const keyDownListener = useCallback(
    (event) => {
      const keyPressed = event.key.toLowerCase();
      if (keyPressed === "enter") {
        if (codeFromInput === process.env.REACT_APP_ACCESS_PWD) {
          props.setHasAccess(true);
        } else {
          setCodeFromInput(null);
          document.getElementById("password").value = null;
          notification.error({ message: "Wrong password" });
        }
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
        id="password"
        onChange={handlerInputChange}
        placeholder="confirm with enter"
        className="passwordInput"
      />
      <br />
      <br />
      <br />
    </div>
  );
};
