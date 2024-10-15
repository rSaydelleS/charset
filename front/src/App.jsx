import "./App.css";
import React from "react";
import CharHeader from "./components/charHeader/charHeader";
import SavingThrow from "./components/SavingThrow/Savingthrow";
import Proficiency from "./components/ProficiencyStats/Proficiency";
import Vital from "./components/Vital/VitalPoints";
function App() {
  return (
    <React.Fragment>
      <section className="w-full h-full bg-white/10 flex flex-col items-center">
        <header>
          <CharHeader />
        </header>
        <div className="w-full flex flex-row justify-evenly items-start p-10 gap-10">
          <SavingThrow />
          <Vital />
          <Proficiency />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
