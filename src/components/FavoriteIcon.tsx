import React from "react";

interface FavoriteIconProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ isFavorite, onClick }) => (
  <div onClick={onClick}>
    {isFavorite ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-bookmark-filled"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z"
          strokeWidth="0"
          fill="black"
        />
      </svg>
    ) : (
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
    )}
  </div>
);

export default FavoriteIcon;
