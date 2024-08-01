import { useState, useEffect } from "react";
import Style from "./home.module.css";
import { HarryResponse, Character } from "@/pages/ui/harrypotter";
import Image from "next/image";
import { PersonajesCard } from "./components/PersonajesCard";

const fetchData = async (endpoint: string): Promise<Character[]> => {
  const response = await fetch(`http://localhost:3001/${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  const personajes: Character[] = data.map((person: any, key: number) => ({
    id: (key + 1).toString(), // Añadir la propiedad id
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

export default function HarryPage() {
  const [personajes, setPersonajes] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData("characters");
        setPersonajes(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div className={Style.background}>Error: {error}</div>;
  }

  if (!personajes) {
    return <div className={Style.background}>Loading...</div>;
  }

  return (
    <div className={Style.background}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center mb-10 mt-24">
          <Image
            src="/Harry.svg"
            alt="Harry Potter"
            width={200}
            height={200}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h1 className="text-3xl font-bold mt-4">Selecciona tu filtro</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8  p-8 md:p-0">
          {personajes.map((personaje) => (
            <div key={personaje.id}>
              <PersonajesCard {...personaje} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
