export default function VitalPoints() {
  return (
    <>
      <section className="text-white/80 text-lg leading-none tracking-wider font-semibold">
        <div className="flex flex-col gap-4 my-8">
          <div>
            <input
              type="text"
              className="w-12 h-12 rounded-full text-center p-2 mr-2"
            />
            <label>Classe de Armadura</label>
          </div>
          <div>
            <input
              type="text"
              className="w-12 h-12 rounded-full text-center p-2 mr-2"
            />
            <label>Movimentação</label>
          </div>
          <div>
            <input
              type="text"
              className="w-12 h-12 rounded-full text-center p-2 mr-2"
            />
            <label>Iniciativa</label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <label>Dados de vida totais: </label>
            <p className="my-3 ">0</p>
          </div>
          <div className="flex flex-col gap-2">
            <label>Vida atual</label>
            <input type="text" className="w-16 h-12 rounded-xl text-center" />
            <label>Vida temporária</label>
            <input type="text" className="w-16 h-12 rounded-xl text-center" />
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-4 gap-4">
            <h2>Testes de morte</h2>
            <div>
              <label>Sucessos</label>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
            <div>
              <label>Fracasos</label>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
