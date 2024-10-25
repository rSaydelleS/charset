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
      </main>
    </>
  );
}
