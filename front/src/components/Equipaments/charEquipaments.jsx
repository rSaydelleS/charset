import React from "react";

export default function charEquipaments() {
  return (
    <React.Fragment>
      <section className="flex flex-col justify-center items-center text-center gap-8 text-white/80">
        <div>
          <h1>Equipamentos</h1>
        </div>
        <div>
          <form className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="p-2 text-sm font-semibold rounded-md tracking-wider leading-3 bg-transparent border-b-2 border-b-white/60 hover:bg-black transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Mod. de acerto"
              className="p-2 text-sm font-semibold rounded-md tracking-wider leading-3 bg-transparent border-b-2 border-b-white/60 hover:bg-black transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Dado de dano"
              className="p-2 text-sm font-semibold rounded-md tracking-wider leading-3 bg-transparent border-b-2 border-b-white/60 hover:bg-black transition-all duration-300"
            />
          </form>
        </div>
        <div>
          <table className="flex flex-col justify-between text-center min-w-96 w-full">
            <thead>
              <tr className="flex flex-row justify-evenly border-b-2 border-b-sky-500 rounded-md mb-2">
                <th>Arma</th>
                <th>Acerto</th>
                <th>Dano</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex flex-row justify-evenly">
                <td>Arco</td>
                <td>+6</td>
                <td>1d8+4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </React.Fragment>
  );
}
