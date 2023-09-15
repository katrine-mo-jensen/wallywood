import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LoginContextProvider } from "./components/loginContext/loginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);
