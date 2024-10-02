import React from "react";

export default function SavingTheow() {
  return (
    <React.Fragment>
      <section className="grid grid-cols-2 grid-rows-2 justify-center items-center content-center text-white/80">
        <div className="flex flex-col p-5 gap-2 justify-center items-center leading-normal tracking-wide">
          <div className="border-white/15 border-solid border-b-2 p-2">
            <label className="text-xl mr-2" htmlFor="forca">
              For
            </label>
            <input
              value="0"
              type="text"
              className="rounded-full w-10 h-10 text-center p-2"
            />
          </div>
          <div className="border-white/15 border-solid border-b-2 p-2">
            <label className="text-xl mr-2" htmlFor="destreza">
              Des
            </label>
            <input
              value="0"
              type="text"
              className="rounded-full w-10 h-10 text-center p-2"
            />
          </div>
          <div className="border-white/15 border-solid border-b-2 p-2">
            <label className="text-xl mr-2" htmlFor="constituicao">
              Con
            </label>
            <input
              value="0"
              type="text"
              className="rounded-full w-10 h-10 text-center p-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-white/15 border-solid border-b-2 p-2">
            <label className="text-xl mr-2" htmlFor="sabedoria">
              Sab
            </label>
            <input
              value="0"
              type="text"
              className="rounded-full w-10 h-10 text-center p-2"
            />
          </div>
          <div className="border-white/15 border-solid border-b-2 p-2">
            <label className="text-xl mr-2" htmlFor="inteligencia">
              Int
            </label>
            <input
              value="0"
              type="text"
              className="rounded-full w-10 h-10 text-center p-2"
            />
          </div>
          <div className="border-white/15 border-solid border-b-2 p-2">
            <label className="text-xl mr-2" htmlFor="carisma">
              Car
            </label>
            <input
              value="0"
              type="text"
              className="rounded-full w-10 h-10 text-center p-2"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
