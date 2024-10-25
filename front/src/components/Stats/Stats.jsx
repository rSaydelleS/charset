import React from "react";

export default function Stats() {
  return (
    <React.Fragment>
      <main>
        <section className="flex flex-col gap-8 md:flex-row justify-center items-center text-center leading-relaxed p-5 text-white/80">
          <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <label className="text-xl font-serif" htmlFor="forca">
              Forca
            </label>
            <h1>bonus</h1>
            <input
              id="forca"
              className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
              type="text"
              inputMode="numeric"
              placeholder="0"
            />
          </div>
          <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <label className="text-xl font-serif" htmlFor="destreza">
              Destreza
            </label>
            <h1>bonus</h1>
            <input
              id="destreza"
              className="text-sm text-white rounded-full py-2 px-4 text-center w-14 "
              type="text"
              inputMode="numeric"
              placeholder="0"
            />
          </div>
          <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <label className="text-xl font-serif" htmlFor="constituicao">
              Constituicao
            </label>
            <h1>bonus</h1>
            <input
              id="constituicao"
              className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
              type="text"
              inputMode="numeric"
              placeholder="0"
            />
          </div>
          <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <label className="text-xl font-serif" htmlFor="sabedoria">
              Sabedoria
            </label>
            <h1>bonus</h1>
            <input
              id="sabedoria"
              className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
              type="text"
              inputMode="numeric"
              placeholder="0"
            />
          </div>
          <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <label className="text-xl font-serif" htmlFor="inteligencia">
              Inteligencia
            </label>
            <h1>bonus</h1>
            <input
              id="inteligencia"
              className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
              type="text"
              inputMode="numeric"
              placeholder="0"
            />
          </div>
          <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <label className="text-xl font-serif" htmlFor="carisma">
              Carisma
            </label>
            <h1>bonus</h1>
            <input
              id="carisma"
              className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
              type="text"
              inputMode="numeric"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col justify-around border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <h1 className="text-xl font-serif">Proficiencia</h1>
            <h1> + 2</h1>
          </div>
          <div className="flex flex-col justify-around border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
            <h1 className="text-xl font-serif">Movimentacao</h1>
            <h1>30 ft</h1>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
