import React from "react";
import { Button } from "@salt-ds/core";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <img src={logo} alt="Logo" width={120} />
      <h1>Welcome to SALT UI + CRA + TypeScript</h1>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;