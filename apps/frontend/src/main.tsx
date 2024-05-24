import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import LoadingLayout from "./Layouts/LoadingLayout.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<LoadingLayout />}>
          <App />
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
