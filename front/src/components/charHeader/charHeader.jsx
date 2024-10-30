import React from "react";
import { SaveButton } from "../Button/SaveButton";
import { UseSendForm } from "../Hooks/useSendForm";

export default function charHeader() {
  const { register, handleSubmit, SendSubmit } = UseSendForm();

  return (
    <React.Fragment>
      <main className=" leading-relaxed text-white/80">
        <form
          onSubmit={handleSubmit(SendSubmit)}
          className="flex flex-row justify-center items-center text-center gap-5 p-10"
        >
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
                {...register("nome", { required: true })}
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
                placeholder="classe"
                {...register("classe", { required: true })}
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
                {...register("nivel", { required: true })}
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
                placeholder="Especie"
                {...register("especie", { required: true })}
              />
            </div>
          </section>
          <section>
            <SaveButton />
          </section>
        </form>
      </main>
    </React.Fragment>
  );
}
