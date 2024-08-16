import "./index.scss";

export default function VitalPoints() {
  return (
    <>
      <main>
        <section className="healthy">
          <div>
            <input type="text" />
            <label>Classe de Armadura</label>
          </div>
          <div>
            <input type="text" />
            <label>Movimentação</label>
          </div>
          <div>
            <input type="text" />
            <label>Iniciativa</label>
          </div>
        </section>
        <section className="life">
          <div>
            <label>Dados de vida totais</label>
            <p>0</p>
          </div>
          <div>
            <label>Vida atual</label>
            <input type="text" />
            <label>Vida temporária</label>
            <p>0</p>
          </div>
          <div>
            <h2>Testes de morte</h2>
            <div>
              <label>Sucessos</label>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
            <div>
              <label>Fracasos</label>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
