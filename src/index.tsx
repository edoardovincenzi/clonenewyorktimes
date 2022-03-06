import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyGlobalContext from "./Hooks/MyGlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <MyGlobalContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyGlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
