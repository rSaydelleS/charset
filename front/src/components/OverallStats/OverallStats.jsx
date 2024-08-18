import "./index.scss";

export default function OverallStats() {
  return (
    <>
      <main>
        <section className="allstats">
          <div>
            <h2>Força</h2>
            <input type="text" />
            <p>Modificador:</p>
          </div>
          <div>
            <h2>Destreza</h2>
            <input type="text" />
            <p>Modificador:</p>
          </div>
          <div>
            <h2>Coonstituiçao</h2>
            <input type="text" />
            <p>Modificador:</p>
          </div>
          <div>
            <h2>Inteligencia</h2>
            <input type="text" />
            <p>Modificador</p>
          </div>
          <div>
            <h2>Sabedoria</h2>
            <input type="text" />
            <p>Modificador:</p>
          </div>
          <div>
            <h2>Carisma</h2>
            <input type="text" />
            <p>Modificador: </p>
          </div>
        </section>
      </main>
    </>
  );
}
