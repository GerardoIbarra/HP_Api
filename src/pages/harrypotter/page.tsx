"use client";

import { useState, useEffect } from "react";
import Style from "./home.module.css";
import Image from "next/image";
import { fetchData } from "../../hook/Fetchdata";
import { Character } from "@/interface";
import { PersonajesCard } from "@/components/PersonajesCard";

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
        <div className="flex justify-center mb-4 space-x-28">
          <button
            onClick={() => setPersonajes(personajes)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-72 h-16"
          >
            ESTUDIANTES
          </button>
          <button
            onClick={() =>
              setPersonajes(personajes.filter((personaje) => personaje.house))
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-72 h-16"
          >
            STAFF
          </button>
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
