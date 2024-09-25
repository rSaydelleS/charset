export default function charHeader() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center leading-relaxed p-5 text-white/80">
        <section className="flex flex-col md:flex-row gap-5 mb-12">
          <div className="flex flex-col">
            <label
              htmlFor="charNome"
              className="text-xl leading-normal tracking-wider text-pink-700"
            >
              Personagem
            </label>
            <input
              id="charNome"
              className="text-sm border-b-2 border-b-pink-700 rounded-lg p-1 text-center bg-transparent hover:bg-black transition-all duration-400"
              type="text"
              placeholder="Nome"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="classe"
              className="text-xl leading-normal tracking-wider text-pink-700"
            >
              Classe
            </label>
            <input
              id="classe"
              className="text-sm border-b-2 border-b-pink-700 rounded-lg p-1 text-center bg-transparent hover:bg-black transition-all duration-400"
              type="text"
              placeholder="Mago"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="nivel"
              className="text-xl leading-normal tracking-wider text-pink-700"
            >
              Nivel
            </label>
            <input
              id="nivel"
              className="text-sm border-b-2 border-b-pink-700 rounded-lg p-1 text-center bg-transparent hover:bg-black transition-all duration-400"
              type="text"
              placeholder="1"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="especie"
              className="text-xl leading-normal tracking-wider text-pink-700"
            >
              Especie
            </label>
            <input
              id="especie"
              className="text-sm border-b-2 border-b-pink-700 rounded-lg p-1 text-center bg-transparent hover:bg-black transition-all duration-400"
              type="text"
              placeholder="Elfo"
            />
          </div>
        </section>
        <section className="flex flex-col gap-8 md:flex-row">
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
    </>
  );
}
