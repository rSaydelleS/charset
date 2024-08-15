import "./index.scss";

export default function Header() {
  return (
    <>
      <main>
        <header className="header">
          <section className="header__name">
            <input type="text"></input>
            <p>Nome do personagem</p>
          </section>
          <section className="header__description">
            <div>
              <ul>
                <li>
                  <label>Classe</label>
                  <input type="text"></input>
                </li>
                <li>
                  <label>Nível</label>
                  <input type="text"></input>
                </li>
                <li>
                  <label>Antecedente</label>
                  <input type="text"></input>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <label>Raça</label>
                  <input type="text"></input>
                </li>
                <li>
                  <label>Alinhamento</label>
                  <input type="text"></input>
                </li>
                <li>
                  <label>XP</label>
                  <input type="text"></input>
                </li>
              </ul>
            </div>
          </section>
        </header>
      </main>
    </>
  );
}
