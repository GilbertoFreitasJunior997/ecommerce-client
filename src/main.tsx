import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Couldn't find #app element!");
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<App />);
}
