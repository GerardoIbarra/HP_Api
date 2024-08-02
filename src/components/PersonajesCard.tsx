import { Character } from "@/interface";
import Image from "next/image";
import React from "react";
import styles from "../styles/personajes.module.css";

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
    <div className={`${styles.card} ${!alive ? styles.inactive : ""}`}>
      <div
        className={`${styles.gradient} bg-gradient-to-r ${getGradientClasses(
          house
        )}`}
      >
        <Image
          src={image.replace("http://", "https://")}
          alt={name}
          width={200}
          height={200}
          className={styles.image}
          priority={false}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textCenter}>
          <div className={styles.smallScreen}>
            <h2 className={`${styles.title} ${styles.textSky}`}>{name}</h2>
            <div className={styles.flexRow}>
              <div className={styles.flexColumn}>
                <span className={styles.textGray}>
                  {alive ? "VIVO" : "FINADO"}
                </span>
                <span className={styles.textGray}>
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
                  strokeWidth="1"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.largeScreen}>
            <div
              className={`${styles.flexColumnLange} ${styles.flexCenter} ${styles.flexColumnMedium}`}
            >
              <div
                className={`${styles.flexColumnLange} ${styles.flexRowLange} ${styles.gapHorizontalMedium}`}
              >
                <span className={`md:text-xl ${styles.textGray}`}>
                  {alive ? "VIVO" : "FINADO"}
                </span>
                <span
                  className={`md:text-xl ${styles.textGray} hidden md:inline`}
                >
                  /
                </span>
                <span className={`md:text-xl ${styles.textGray}`}>
                  {hogwartsStudent ? "ESTUDIANTE" : "STAFF"}
                </span>
              </div>
              <button className={styles.button}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                </svg>
              </button>
            </div>
            <h2 className={`md:text-xl ${styles.textSky} mt-2 mb-2 font-bold`}>
              {name}
            </h2>
          </div>
        </div>
        <div className={`${styles.largeScreen} ${styles.textGrayLarge}`}>
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
