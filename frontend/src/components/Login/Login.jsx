import React, { useState, useCallback, useEffect } from "react";
import { Input } from "antd";

export const Login = (props) => {
  const [codeFromInput, setCodeFromInput] = useState(undefined);

  const handlerInputChange = (e) => {
    setCodeFromInput(e.target.value);
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
    <Input.Password
      id="code"
      onChange={handlerInputChange}
      placeholder="input code & confirm with enter"
      className="PinInput__mobileInput"
    />
  );
};
