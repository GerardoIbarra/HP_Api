import { useState, useEffect } from "react";
import Image from "next/image";
import Style from "../../styles/home.module.css";
import { fetchData } from "../../hook/Fetchdata";
import { Character } from "@/interface";
import { PersonajesCard } from "@/components/PersonajesCard";
import { ButtonHeader } from "@/components/ButtonHeader";
import FilterButton from "@/components/FilterButton";

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
        <ButtonHeader />
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
          <FilterButton
            filter={filter}
            setFilter={setFilter}
            targetFilter="students"
            label="ESTUDIANTES"
          />
          <FilterButton
            filter={filter}
            setFilter={setFilter}
            targetFilter="staff"
            label="STAFF"
          />
        </div>
        <div className={Style.grid}>
          {personajes.map((personaje) => (
            <PersonajesCard key={personaje.id} {...personaje} />
          ))}
        </div>
      </div>
    </div>
  );
}
