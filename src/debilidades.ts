export const debilidades: {[key: string]: {weaknesses: string[]}} = {
  normal: {
    weaknesses: ["Fighting"],
  },
  fire: {
    weaknesses: ["Water", "Rock", "Ground"],
  },
  water: {
    weaknesses: ["Electric", "Grass"],
  },
  grass: {
    weaknesses: ["Fire", "Ice", "Flying", "Poison", "Bug"],
  },
  electric: {
    weaknesses: ["Ground"],
  },
  ice: {
    weaknesses: ["Fire", "Fighting", "Rock", "Steel"],
  },
  fighting: {
    weaknesses: ["Flying", "Psychic", "Fairy"],
  },
  poison: {
    weaknesses: ["Ground", "Psychic"],
  },
  ground: {
    weaknesses: ["Water", "Grass", "Ice"],
  },
  flying: {
    weaknesses: ["Electric", "Ice", "Rock"],
  },
  psychic: {
    weaknesses: ["Bug", "Ghost", "Dark"],
  },
  bug: {
    weaknesses: ["Fire", "Flying", "Rock"],
  },
  rock: {
    weaknesses: ["Water", "Grass", "Fighting", "Ground", "Steel"],
  },
  ghost: {
    weaknesses: ["Ghost", "Dark"],
  },
  dragon: {
    weaknesses: ["Ice", "Dragon", "Fairy"],
  },
  dark: {
    weaknesses: ["Fighting", "Bug", "Fairy"],
  },
  steel: {
    weaknesses: ["Fire", "Fighting", "Ground"],
  },
  fairy: {
    weaknesses: ["Poison", "Steel"],
  },
};


