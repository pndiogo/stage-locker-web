import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/src/App.tsx";
import "@/src/index.css";
import "@/src/i18n";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
