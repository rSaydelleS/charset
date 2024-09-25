export default function Proficiency() {
  return (
    <>
      <main>
        <section>
          <section className="proficiency">
            <div>
              <input type="text" />
              <label>Bonus de proficiência</label>
            </div>
            <div className="inspiration">
              <input type="text" />
              <label>Inspirações</label>
            </div>
          </section>
          <div className="sv">
            <div>
              <ul>
                <li>
                  <input type="checkbox" />
                  <input type="text" />
                  <label>Força</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="text" />
                  <label>Constituição</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="text" />
                  <label>Destreza</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="text" />
                  <label>Inteligência</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="text" />
                  <label>Sabedoria</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <input type="text" />
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
