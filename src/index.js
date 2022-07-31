import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import History from "./helpers/History";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HistoryRouter history={History}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);
