import "./index.scss";

export default function Equipments() {
  return (
    <>
      <main className="inventory">
        <section>
          <h1>Equipamentos</h1>
          <div>
            <table>
              <tr>
                <th>Arma</th>
                <th>Acerto</th>
                <th>Dano</th>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section>
          <h2>Inventário</h2>
          <textarea cols="60" rows="10"></textarea>
        </section>
      </main>
    </>
  );
}
