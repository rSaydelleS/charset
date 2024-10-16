import React, { useState } from "react";

export default function CharEquipaments() {
  const [isBackpackOpen, steIsBanckpackOpen] = useState(true);

  return (
    <React.Fragment>
      <section className="flex flex-col justify-center items-center text-center gap-8 text-white/80">
        <div className="flex flex-row gap-8">
          <h1
            className={`font-bold text-xl leading-normal tracking-wider ${
              isBackpackOpen && "text-pink-700"
            }`}
            onClick={() => steIsBanckpackOpen(true)}
          >
            Equipamentos
          </h1>
          <h1
            className={`font-bold text-xl leading-normal tracking-wider ${
              isBackpackOpen == false && "text-pink-700"
            }`}
            onClick={() => steIsBanckpackOpen(false)}
          >
            Mochila
          </h1>
        </div>
        {isBackpackOpen == true ? (
          <>
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
          </>
        ) : (
          <div>
            <h2>Equipamentos diversos</h2>
            <textarea cols={20} rows={10}></textarea>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}
