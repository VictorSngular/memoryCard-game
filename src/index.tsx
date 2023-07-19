import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import RouterApp from "./Routes";
import "./config/i18n.js";
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles/themeColors.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <RouterApp />
      </Router>
    </Provider>
  </React.StrictMode>
);
