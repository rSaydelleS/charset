import "./App.css";
import React from "react";
import CharHeader from "./components/charHeader/charHeader";
import SavingThrow from "./components/SavingThrow/Savingthrow";
function App() {
  return (
    <React.Fragment>
      <section className="w-full h-full md:h-screen bg-white/10 flex flex-col items-center">
        <CharHeader />
        <SavingThrow />
      </section>
    </React.Fragment>
  );
}

export default App;
