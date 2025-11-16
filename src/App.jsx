import "./App.css";

import Inicio from "./components/inicio/inicio";
import NavMini from "./components/nav/navMini";

export default function App() {
  return (
    <div className="app">
      <NavMini />
      <Inicio />
    </div>
  );
}
