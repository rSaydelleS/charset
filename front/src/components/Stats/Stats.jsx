import React from "react";
import { SaveButton } from "../Button/SaveButton";
import { UseSendForm } from "../Hooks/useSendForm";
import { UseChangeBonus } from "../Hooks/useChangeBonus";

export default function Stats() {
  const { register, handleSubmit, SendSubmit } = UseSendForm();
  const {
    bonusForca,
    bonusDestreza,
    bonusConstituicao,
    bonusInteligencia,
    bonusSabedoria,
    bonusCarisma,
    changeBonusForca,
    changeBonusDestreza,
    changeBonusConstituicao,
    changeBonusInteligencia,
    changeBonusSabedoria,
    changeBonusCarisma,
  } = UseChangeBonus();

  return (
    <React.Fragment>
      <main>
        <section className="flex flex-col gap-8 md:flex-row justify-center items-center text-center leading-relaxed p-5 text-white/80">
          <form
            className="flex flex-col gap-8 md:flex-row"
            onSubmit={handleSubmit(SendSubmit)}
          >
            <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
              <label className="text-xl font-serif" htmlFor="forca">
                Força
              </label>
              <h1>{bonusForca}</h1>
              <input
                id="forca"
                className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
                type="text"
                inputMode="numeric"
                placeholder="0"
                {...register("forca", { required: true })}
                onChange={(e) => changeBonusForca(e)}
              />
            </div>
            <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
              <label className="text-xl font-serif" htmlFor="destreza">
                Destreza
              </label>
              <h1>{bonusDestreza}</h1>
              <input
                id="destreza"
                className="text-sm text-white rounded-full py-2 px-4 text-center w-14 "
                type="text"
                inputMode="numeric"
                placeholder="0"
                {...register("destreza", { required: true })}
                onChange={(e) => changeBonusDestreza(e)}
              />
            </div>
            <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
              <label className="text-xl font-serif" htmlFor="constituicao">
                Constituicao
              </label>
              <h1>{bonusConstituicao}</h1>
              <input
                id="constituicao"
                className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
                type="text"
                inputMode="numeric"
                placeholder="0"
                {...register("constituicao", { required: true })}
                onChange={(e) => changeBonusConstituicao(e)}
              />
            </div>
            <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
              <label className="text-xl font-serif" htmlFor="sabedoria">
                Sabedoria
              </label>
              <h1>{bonusSabedoria}</h1>
              <input
                id="sabedoria"
                className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
                type="text"
                inputMode="numeric"
                placeholder="0"
                {...register("sabedoria", { required: true })}
                onChange={(e) => changeBonusSabedoria(e)}
              />
            </div>
            <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
              <label className="text-xl font-serif" htmlFor="inteligencia">
                Inteligencia
              </label>
              <h1>{bonusInteligencia}</h1>
              <input
                id="inteligencia"
                className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
                type="text"
                inputMode="numeric"
                placeholder="0"
                {...register("inteligencia", { required: true })}
                onChange={(e) => changeBonusInteligencia(e)}
              />
            </div>
            <div className="border-white/15 border-solid border-2 px-4 pt-4 hover:shadow-lg hover:shadow-white/15 transition-all duration-300">
              <label className="text-xl font-serif" htmlFor="carisma">
                Carisma
              </label>
              <h1>{bonusCarisma}</h1>

              <input
                id="carisma"
                className="text-sm text-white rounded-full py-2 px-4 text-center w-14"
                type="text"
                inputMode="numeric"
                placeholder="0"
                {...register("carisma", { required: true })}
                onChange={(e) => changeBonusCarisma(e)}
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
            <div className="flex justify-center items-end">
              <SaveButton />
            </div>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}
