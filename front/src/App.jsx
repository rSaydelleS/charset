import "./App.css";
import React from "react";
import CharHeader from "./components/charHeader/charHeader";
import SavingThrow from "./components/SavingThrow/Savingthrow";
import Proficiency from "./components/ProficiencyStats/Proficiency";
import Vital from "./components/Vital/VitalPoints";
import CharSenses from "./components/Senses/Senses";
import CharEquipaments from "./components/Equipaments/charEquipaments";
function App() {
  return (
    <React.Fragment>
      <section className="w-full h-full bg-white/10 flex flex-col items-center ">
        <header>
          <CharHeader />
        </header>
        <div className="w-full flex flex-col md:flex-row justify-evenly items-start p-10 gap-10">
          <SavingThrow />
          <Vital />
          <Proficiency />
        </div>
        <div className="w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-start p-10">
          <CharSenses />
          <CharEquipaments />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
