"use client";

import { Character } from "@/interface";
import Image from "next/image";
import React from "react";
import styles from "../styles/personajes.module.css";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/personajes/favorite";
import FavoriteIcon from "./FavoriteIcon";

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
  const isFavorite = useAppSelector((state) => !!state.favorite[name]);
  const dispatch = useAppDispatch();

  const onClickToggle = () => {
    dispatch(toggleFavorite({ name, image }));
  };

  const characterStatus = alive ? "VIVO" : "FINADO";
  const position = hogwartsStudent ? "ESTUDIANTE" : "STAFF";

  return (
    <div className={`${styles.card} ${!alive ? styles.inactive : ""}`}>
      <div
        className={`${styles.gradient} bg-gradient-to-r ${getGradientClasses(
          house
        )}`}
      >
        <Image
          src={
            image
              ? image.replace("http://", "https://")
              : gender !== "female"
              ? "https://e0.pxfuel.com/wallpapers/290/653/desktop-wallpaper-harry-potter-harry-potter-hedwig-harry-potter-drawings-harry-potter.jpg"
              : " https://reactormag.com/wp-content/uploads/2016/10/Ginny01-740x400.jpg"
          }
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
                <span className={styles.textGray}>{characterStatus}</span>
                <span className={styles.textGray}>{position}</span>
              </div>
              <div className="self-end">
                <FavoriteIcon isFavorite={isFavorite} onClick={onClickToggle} />
              </div>
            </div>
          </div>

          <div className={styles.largeScreen}>
            <div
              className={`${styles.flexColumnLange} ${styles.flexCenterlange} ${styles.flexColumnMedium}`}
            >
              <div
                className={`${styles.flexColumnLange} ${styles.flexRowLange} ${styles.gapHorizontalMedium}`}
              >
                <span className={`md:text-xl ${styles.textGray}`}>
                  {characterStatus}
                </span>
                <span
                  className={`md:text-xl ${styles.textGray} hidden md:inline`}
                >
                  /
                </span>
                <span className={`md:text-xl ${styles.textGray}`}>
                  {position}
                </span>
              </div>
              <div className={styles.button}>
                <FavoriteIcon isFavorite={isFavorite} onClick={onClickToggle} />
              </div>
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
