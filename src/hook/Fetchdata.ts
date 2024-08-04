import { Character, CharacterModlAdd } from "@/interface";
import Swal from "sweetalert2";

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

export const addCharacterModal = async (
  character: CharacterModlAdd,
  endpoint: string
): Promise<void> => {
  const url = `http://localhost:3001/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      Swal.fire({
        title: "Personaje añadido",
        text: "Personaje añadido con exito",
        icon: "success",
      });
    }
  } catch (error) {
    console.error("Error al añadir personaje:", error);
  }
};
