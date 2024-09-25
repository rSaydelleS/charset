import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Equipments() {
  const { register, handleSubmit, reset } = useForm();
  const [inventario, setInventario] = useState([]);
  const adicionar = (data) => {
    console.log(data);
    setInventario([data]);
    reset();
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h1>Equipamentos</h1>
            <form onSubmit={handleSubmit(adicionar)}>
              <input type="text" {...register("arma")} />
              <input type="text" {...register("acerto")} />
              <input type="text" {...register("dano")} />
              <button type="submit">+</button>
            </form>
          </div>
          <div>
            <table>
              <thead>
                <th>Arma</th>
                <th>Acerto</th>
                <th>Dano</th>
              </thead>
              {inventario.map((item) => {
                return (
                  <tbody key={item.arma}>
                    <td>{item.arma}</td>
                    <td>{item.acerto}</td>
                    <td>{item.dano}</td>
                  </tbody>
                );
              })}
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
