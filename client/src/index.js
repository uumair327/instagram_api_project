import './styles.css';
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client"; // <- using 'client' version
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
