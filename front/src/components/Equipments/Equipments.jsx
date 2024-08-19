import "./index.scss";
import { useForm } from "react-hook-form";

export default function Equipments() {
  const { register, handleSubmit, reset } = useForm();
  const adicionar = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <main className="inventory">
        <section>
          <h1>Equipamentos</h1>
          <div>
            <form onSubmit={handleSubmit(adicionar)}>
              <input type="text" {...register("arma")} />
              <input type="text" {...register("acerto")} />
              <input type="text" {...register("dano")} />
              <button type="submit">+</button>
            </form>
            <table>
              <thead>
                <th>Arma</th>
                <th>Acerto</th>
                <th>Dano</th>
              </thead>
              <tbody></tbody>
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
