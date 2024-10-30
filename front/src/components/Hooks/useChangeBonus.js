import { useState } from "react";

export function UseChangeBonus() {
  const [bonusForca, setBonusForca] = useState(0);
  const [bonusDestreza, setBonusDestreza] = useState(0);
  const [bonusConstituicao, setBonusConstituicao] = useState(0);
  const [bonusSabedoria, setBonusSabedoria] = useState(0);
  const [bonusInteligencia, setBonusInteligencia] = useState(0);
  const [bonusCarisma, setBonusCarisma] = useState(0);

  const changeBonusForca = (e) => {
    const { value, name } = e.target;

    switch (name == "forca") {
      case value == 3:
        setBonusForca(-4);
        break;
      case value == 4 || value == 5:
        setBonusForca(-3);
        break;
      case value == 6 || value == 7:
        setBonusForca(-2);
        break;
      case value == 8 || value == 9:
        setBonusForca(-1);
        break;
      case value == 10 || value == 11:
        setBonusForca(0);
        break;
      case value == 12 || value == 13:
        setBonusForca(1);
        break;
      case value == 14 || value == 15:
        setBonusForca(2);
        break;
      case value == 16 || value == 17:
        setBonusForca(3);
        break;
      case value == 18 || value == 19:
        setBonusForca(4);
        break;
      case value == 20:
        setBonusForca(5);
        break;
      default:
        break;
    }
  };

  const changeBonusDestreza = (e) => {
    const { value, name } = e.target;
    switch (name == "destreza") {
      case value == 3:
        setBonusDestreza(-4);
        break;
      case value == 4 || value == 5:
        setBonusDestreza(-3);
        break;
      case value == 6 || value == 7:
        setBonusForca(-2);
        break;
      case value == 8 || value == 9:
        setBonusDestreza(-1);
        break;
      case value == 10 || value == 11:
        setBonusDestreza(0);
        break;
      case value == 12 || value == 13:
        setBonusDestreza(1);
        break;
      case value == 14 || value == 15:
        setBonusDestreza(2);
        break;
      case value == 16 || value == 17:
        setBonusDestreza(3);
        break;
      case value == 18 || value == 19:
        setBonusDestreza(4);
        break;
      case value == 20:
        setBonusDestreza(5);
        break;
      default:
        break;
    }
  };

  const changeBonusConstituicao = (e) => {
    const { value, name } = e.target;
    switch (name == "constituicao") {
      case value == 3:
        setBonusConstituicao(-4);
        break;
      case value == 4 || value == 5:
        setBonusConstituicao(-3);
        break;
      case value == 6 || value == 7:
        setBonusConstituicao(-2);
        break;
      case value == 8 || value == 9:
        setBonusConstituicao(-1);
        break;
      case value == 10 || value == 11:
        setBonusConstituicao(0);
        break;
      case value == 12 || value == 13:
        setBonusConstituicao(1);
        break;
      case value == 14 || value == 15:
        setBonusConstituicao(2);
        break;
      case value == 16 || value == 17:
        setBonusConstituicao(3);
        break;
      case value == 18 || value == 19:
        setBonusConstituicao(4);
        break;
      case value == 20:
        setBonusConstituicao(5);
        break;
      default:
        break;
    }
  };

  const changeBonusSabedoria = (e) => {
    const { value, name } = e.target;
    switch (name == "sabedoria") {
      case value == 3:
        setBonusSabedoria(-4);
        break;
      case value == 4 || value == 5:
        setBonusSabedoria(-3);
        break;
      case value == 6 || value == 7:
        setBonusSabedoria(-2);
        break;
      case value == 8 || value == 9:
        setBonusSabedoria(-1);
        break;
      case value == 10 || value == 11:
        setBonusSabedoria(0);
        break;
      case value == 12 || value == 13:
        setBonusSabedoria(1);
        break;
      case value == 14 || value == 15:
        setBonusSabedoria(2);
        break;
      case value == 16 || value == 17:
        setBonusSabedoria(3);
        break;
      case value == 18 || value == 19:
        setBonusSabedoria(4);
        break;
      case value == 20:
        setBonusSabedoria(5);
        break;
      default:
        break;
    }
  };

  const changeBonusInteligencia = (e) => {
    const { value, name } = e.target;
    switch (name == "inteligencia") {
      case value == 3:
        setBonusInteligencia(-4);
        break;
      case value == 4 || value == 5:
        setBonusInteligencia(-3);
        break;
      case value == 6 || value == 7:
        setBonusInteligencia(-2);
        break;
      case value == 8 || value == 9:
        setBonusInteligencia(-1);
        break;
      case value == 10 || value == 11:
        setBonusInteligencia(0);
        break;
      case value == 12 || value == 13:
        setBonusInteligencia(1);
        break;
      case value == 14 || value == 15:
        setBonusInteligencia(2);
        break;
      case value == 16 || value == 17:
        setBonusInteligencia(3);
        break;
      case value == 18 || value == 19:
        setBonusInteligencia(4);
        break;
      case value == 20:
        setBonusInteligencia(5);
        break;
      default:
        break;
    }
  };

  const changeBonusCarisma = (e) => {
    const { value, name } = e.target;
    switch (name == "carisma") {
      case value == 3:
        setBonusCarisma(-4);
        break;
      case value == 4 || value == 5:
        setBonusCarisma(-3);
        break;
      case value == 6 || value == 7:
        setBonusCarisma(-2);
        break;
      case value == 8 || value == 9:
        setBonusCarisma(-1);
        break;
      case value == 10 || value == 11:
        setBonusCarisma(0);
        break;
      case value == 12 || value == 13:
        setBonusCarisma(1);
        break;
      case value == 14 || value == 15:
        setBonusCarisma(2);
        break;
      case value == 16 || value == 17:
        setBonusCarisma(3);
        break;
      case value == 18 || value == 19:
        setBonusCarisma(4);
        break;
      case value == 20:
        setBonusCarisma(5);
        break;
      default:
        break;
    }
  };

  return {
    bonusForca,
    bonusDestreza,
    bonusConstituicao,
    bonusInteligencia,
    bonusSabedoria,
    bonusCarisma,
    changeBonusForca,
    changeBonusDestreza,
    changeBonusConstituicao,
    changeBonusSabedoria,
    changeBonusInteligencia,
    changeBonusCarisma,
  };
}
