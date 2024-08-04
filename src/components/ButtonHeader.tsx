import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/store/personajes/favorite";
import Style from "../styles/buttonHeadder.module.css";
import { RootState } from "@/interface";
import Image from "next/image";

export const ButtonHeader = () => {
  const [showFavorites, setShowFavorites] = useState(false);

  const favoriteState = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const favoriteCount = Object.keys(favoriteState).length;

  return (
    <div
      className={` ${Style.ContainerButon} ${
        showFavorites ? Style.active : ""
      }`}
    >
      <div className={Style.mobileOnly}>
        {showFavorites && (
          <div className={`${Style.favoritesList} `}>
            {Object.keys(favoriteState).length === 0 && (
              <div className={Style.favoriteItem}>No hay favoritos</div>
            )}
            {favoriteCount > 0 && (
              <>
                <h4 className="text-center text-white mb-3 ">{` Personaje favorito: ${favoriteCount} / 5`}</h4>
                <hr />
              </>
            )}
            {Object.entries(favoriteState).map(([name, { image }]) => {
              return (
                <div key={name} className={Style.favoriteItem}>
                  <Image
                    src={image.replace("http://", "https://")}
                    alt={name}
                    width={100}
                    height={100}
                    className={Style.image}
                    priority={false}
                  />
                  {name}
                  <button
                    onClick={() =>
                      dispatch(toggleFavorite({ name, image: "" }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <div>
          <button
            className={`${Style.ButtonHeader} ${Style.ButtonHeaderLeft}`}
            onClick={() => toggleShowFavorites()}
          >
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
        </div>
        <div>
          <button
            className={`${Style.ButtonHeader} ${Style.ButtonHeaderRight}`}
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
      </div>

      <div className={Style.desktopOnly}>
        {showFavorites && (
          <div className={`${Style.favoritesList}`}>
            {Object.keys(favoriteState).length === 0 && (
              <div className={Style.favoriteItem}>No hay favoritos</div>
            )}
            {Object.entries(favoriteState).map(([name, { image }]) => {
              return (
                <div key={name} className={Style.favoriteItem}>
                  <Image
                    src={image.replace("http://", "https://")}
                    alt={name}
                    width={100}
                    height={100}
                    className={Style.image}
                    priority={false}
                  />
                  {name}
                  <button
                    onClick={() =>
                      dispatch(toggleFavorite({ name, image: "" }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              );
            })}
            {favoriteCount > 0 && (
              <>
                <hr />
                <h4 className="text-center text-white pt-3">{` Personaje favorito: ${favoriteCount} / 5`}</h4>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
