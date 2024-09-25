import "./App.css";
import React from "react";
import CharHeader from "./components/charHeader/charHeader";
function App() {
  return (
    <React.Fragment>
      <section className="w-full h-full md:h-screen bg-white/10">
        <CharHeader />
      </section>
    </React.Fragment>
  );
}

export default App;
