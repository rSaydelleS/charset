import React from "react";

export default function charSenses() {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4 text-white/80 text-lg leading-none tracking-wider font-semibold">
        <div className="flex flex-row gap-5 items-center">
          <input type="text" className="w-16 h-12 rounded-xl text-center" />
          <p>Percepção passiva</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <input type="text" className="w-16 h-12 rounded-xl text-center" />
          <p>Visão no escuro. ft</p>
        </div>
        <div>
          <h1>Idiomas</h1>
          <ul className="mt-2 text-lg flex flex-col gap-2">
            <li>Comum</li>
            <li>
              <input
                type="text"
                placeholder="adicionar"
                className="p-2 text-sm rounded-lg"
              />
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
