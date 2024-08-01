import Image from "next/image";
import React from "react";
import { Character } from "@/pages/ui/harrypotter";

// Función para obtener las clases de gradiente basadas en la casa
const getGradientClasses = (house: string) => {
  switch (house) {
    case "Gryffindor":
      return "from-orange-400 to-red-500";
    case "Slytherin":
      return "from-green-400 to-green-700";
    case "Ravenclaw":
      return "from-blue-400 to-blue-700";
    case "Hufflepuff":
      return "from-yellow-400 to-yellow-700";
    default:
      return "from-gray-400 to-gray-500";
  }
};

export const PersonajesCard: React.FC<Character> = ({
  image,
  name,
  dateOfBirth,
  gender,
  eyeColour,
  hairColour,
  house,
  alive,
  hogwartsStudent,
}: Character) => {
  return (
    <div
      className={`max-w-sm md:max-w-full mx-auto ${
        alive ? "bg-white" : "bg-gray-400"
      } shadow-lg rounded-lg overflow-hidden md:flex`}
    >
      <div
        className={`bg-gradient-to-r ${getGradientClasses(
          house
        )} p-4 md:flex-shrink-0`}
      >
        <Image
          src={image.replace("http://", "https://")}
          alt={name}
          width={200}
          height={200}
          className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto"
        />
      </div>
      <div className="p-4 md:flex-grow">
        <div className="text-center md:text-left">
          {/* Disposición para pantallas pequeñas */}
          <div className="md:hidden">
            <h2 className="md:text-xl text-xs font-bold text-sky-950 mb-2">
              {name}
            </h2>
            <div className="flex items-start justify-between gap-x-2 ">
              <div className="flex flex-col text-left">
                <span className="text-gray-500 text-xs">
                  {alive ? "VIVO" : "FINADO"}
                </span>
                <span className="text-gray-500 text-xs">
                  {hogwartsStudent ? "ESTUDIANTE" : "STAFF"}
                </span>
              </div>
              <button className="self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Disposición para pantallas medianas y grandes */}
          <div className="hidden md:block">
            <div className="md:flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:gap-x-2">
                <span className="text-gray-500 md:text-xl">
                  {alive ? "VIVO" : "FINADO"}
                </span>
                <span className="text-gray-500 md:text-xl hidden md:inline">
                  /
                </span>
                <span className="text-gray-500 md:text-xl">
                  {hogwartsStudent ? "ESTUDIANTE" : "STAFF"}
                </span>
              </div>
              <button className="mt-2 md:mt-0 md:ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                </svg>
              </button>
            </div>
            <h2 className="md:text-xl font-bold text-sky-950 mt-2 mb-2">
              {name}
            </h2>
          </div>
        </div>
        <div className="hidden md:block mt-4 text-gray-950 w">
          <p>
            <span className="font-bold">Cumpleaños:</span> {dateOfBirth}
          </p>
          <p>
            <span className="font-bold">Género:</span> {gender.toUpperCase()}
          </p>
          <p>
            <span className="font-bold">Color de ojos: </span>
            {eyeColour.toUpperCase()}
          </p>
          <p>
            <span className="font-bold">Color de pelo: </span>
            {hairColour.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};
