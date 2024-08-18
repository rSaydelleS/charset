import "./App.css";
import Header from "./components/Header/header";
import Proficiency from "./components/Status/Proficiency";
import VitalPoints from "./components/Vital/VitalPoints";

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
    </>
  );
}

export default App;
