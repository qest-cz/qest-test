import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { mergePeopleWithAnimals } from "./mergePeopleWithAnimals";
import "./styles.css";

const App = () => {
  mergePeopleWithAnimals();

  return (
    <div className="app">
      <h1>Qest test</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
