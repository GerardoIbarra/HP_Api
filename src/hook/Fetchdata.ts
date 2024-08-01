import { Character } from "@/interface";

export const fetchData = async (endpoint: string): Promise<Character[]> => {
  const response = await fetch(`http://localhost:3001/${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  const personajes: Character[] = data.map((person: any, key: number) => ({
    id: (key + 1).toString(),
    name: person.name,
    species: person.species,
    gender: person.gender,
    house: person.house,
    dateOfBirth: person.dateOfBirth,
    yearOfBirth: person.yearOfBirth,
    ancestry: person.ancestry,
    eyeColour: person.eyeColour,
    hairColour: person.hairColour,
    wand: person.wand,
    patronus: person.patronus,
    hogwartsStudent: person.hogwartsStudent,
    hogwartsStaff: person.hogwartsStaff,
    actor: person.actor,
    alive: person.alive,
    image: person.image,
  }));

  return personajes;
};
