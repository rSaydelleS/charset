import "./index.scss";

export default function Proficiency() {
  return (
    <>
      <main>
        <section>
          <div className="proficiency">
            <input type="text" />
            <label>Bonus de proficiência</label>
          </div>
          <div className="inspiration">
            <input type="text" />
            <label>Inspirações</label>
          </div>
          <div className="sv">
            <div>
              <ul>
                <li>
                  <input type="checkbox" />
                  <input type="number" />
                  <label>Força</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="number" />
                  <label>Constituição</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="number" />
                  <label>Destreza</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="number" />
                  <label>Inteligência</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="number" />
                  <label>Sabedoria</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="number" />
                  <label>Carisma</label>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
