import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { StarshipsProvider } from "./contexts/StarshipsContext.tsx";

// include the contexts in hierearchy of importance for the user
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StarshipsProvider>
          <App />
        </StarshipsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
