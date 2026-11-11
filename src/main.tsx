import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element #root was not found");
}

const app = <App />;
if (rootEl.hasAttribute("data-prerendered")) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
