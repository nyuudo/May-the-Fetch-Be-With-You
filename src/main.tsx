import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StarshipsProvider } from "./contexts/StarshipsContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StarshipsProvider>
        <App />
      </StarshipsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
