import React from "react";
import App from "./App";
import "../src/cssStyling/index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import RequestTranslatedData from "./utils/translations/RequestTranslatedData";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";
import "./utils/translations/i18n";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RequestTranslatedData />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
