"use client";

import { useState, useEffect } from "react";
import Style from "../../styles/home.module.css";
import Image from "next/image";
import { fetchData } from "../../hook/Fetchdata";
import { Character } from "@/interface";
import { PersonajesCard } from "@/components/PersonajesCard";

export default function HarryPage() {
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const getPersonajes = async (type: string | null) => {
    try {
      const endpoint = type ? type : "characters";
      const data = await fetchData(endpoint);
      setPersonajes(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getPersonajes(filter);
  }, [filter]);

  if (error) {
    return <div className={Style.background}>Error: {error}</div>;
  }

  if (!personajes.length) {
    return <div className={Style.background}>Loading...</div>;
  }

  return (
    <div className={Style.background}>
      <div className={Style.buttonContainerHeader}>
        <button className={` ${Style.ButtonHeader} ${Style.ButtonHeaderleft} `}>
          FAVORITOS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bookmark-filled"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          className={` ${Style.ButtonHeader} ${Style.ButtonHeaderRight} `}
        >
          AGREGAR
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user-plus"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
          </svg>
        </button>
      </div>
      <div className={Style.container}>
        <div className={Style.header}>
          <Image
            src="/Harry.svg"
            alt="Harry Potter"
            width={200}
            height={200}
            priority={true}
          />
          <h1 className={Style.title}>Selecciona tu filtro</h1>
        </div>
        <div className={Style.buttonContainer}>
          <button
            onClick={() => setFilter(filter === "students" ? null : "students")}
            className={`${Style.button} ${
              filter === "students" ? Style.active : ""
            }`}
          >
            ESTUDIANTES
          </button>
          <button
            onClick={() => setFilter(filter === "staff" ? null : "staff")}
            className={`${Style.button} ${
              filter === "staff" ? Style.active : ""
            }`}
          >
            STAFF
          </button>
        </div>
        <div className={Style.grid}>
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
