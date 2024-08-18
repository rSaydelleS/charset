import "./App.css";
import Header from "./components/Header/header";
import Proficiency from "./components/Stats/Proficiency";
import VitalPoints from "./components/Vital/VitalPoints";
import OverallStats from "./components/OverallStats/OverallStats";
import Equipments from "./components/Equipments/Equipments";

function App() {
  return (
    <>
      <section className="header">
        <Header />
      </section>
      <section className="VitalStats">
        <Proficiency />
        <VitalPoints />
      </section>
      <section>
        <OverallStats />
      </section>
      <section>
        <Equipments />
      </section>
    </>
  );
}

export default App;
