import "./App.css";

import Inicio from "./components/inicio/inicio";
import Nav from "./components/nav/nav";
import NavMini from "./components/nav/navMini";

export default function App() {
  return (
    <div id="app" className="app">
      <NavMini />
      <Nav />
      <Inicio />
    </div>
  );
}
