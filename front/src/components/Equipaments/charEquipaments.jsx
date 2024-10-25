import React, { useState } from "react";

export default function CharEquipaments() {
  const [isBackpackOpen, steIsBanckpackOpen] = useState(true);

  return (
    <React.Fragment>
      <section className="flex flex-col justify-center items-center h-64 tracking-wider text-center gap-8 text-white/80">
        <div className="flex flex-row gap-8">
          <h1
            className={`font-bold text-xl leading-normal cursor-pointer ${
              isBackpackOpen && "text-pink-700 text-2xl"
            }`}
            onClick={() => steIsBanckpackOpen(true)}
          >
            Equipamentos
          </h1>
          <h1
            className={`font-bold text-xl leading-normal cursor-pointer ${
              isBackpackOpen == false && "text-pink-700 text-2xl"
            }`}
            onClick={() => steIsBanckpackOpen(false)}
          >
            Mochila
          </h1>
        </div>
        <div className="min-h-64 ">
          {isBackpackOpen == true ? (
            <>
              <div className="flex flex-row gap-4 mb-8">
                <form className="flex flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="p-2 text-sm font-semibold rounded-md leading-3 bg-transparent border-b-2 border-b-white/60 hover:bg-black transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Mod. de acerto"
                    className="p-2 text-sm font-semibold rounded-md leading-3 bg-transparent border-b-2 border-b-white/60 hover:bg-black transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Dado de dano"
                    className="p-2 text-sm font-semibold rounded-md leading-3 bg-transparent border-b-2 border-b-white/60 hover:bg-black transition-all duration-300"
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
              <h2 className="text-2xl font-bold leading-relaxed mb-2">
                Equipamentos diversos
              </h2>
              <textarea
                className="resize-none p-2 rounded-md border-none brightness-90"
                rows={8}
                cols={50}
              ></textarea>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
