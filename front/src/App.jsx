import "./App.css";
import React from "react";
import CharHeader from "./components/charHeader/charHeader";
import SavingThrow from "./components/SavingThrow/Savingthrow";
import Proficiency from "./components/ProficiencyStats/Proficiency";
function App() {
  return (
    <React.Fragment>
      <section className="w-full h-full md:h-screen bg-white/10 flex flex-col items-center">
        <header>
          <CharHeader />
        </header>
        <div className="w-full flex flex-row justify-around items-start p-10 gap-10">
          <SavingThrow />
          <Proficiency />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
