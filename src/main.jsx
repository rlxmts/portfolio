import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/Rotas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
