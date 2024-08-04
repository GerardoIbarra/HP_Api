"use client";
import React, { useState } from "react";
import Style from "../styles/modalNew.module.css";

interface ModalProps {
  onClose: () => void;
}
const AddModal: React.FC<ModalProps> = function ({ onClose }) {
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    setIsActive(!isActive);
    event.preventDefault();
    console.log("Formulario enviado");
    onClose();
  };

  return (
    <div className={Style.modalbackdrop}>
      <div className={Style.modalcontent}>
        <form onSubmit={handleSubmit}>
          <div className={Style.modalheader}>
            <h2>Agrega un personaje</h2>
            <div onClick={onClose} className={Style.icontabler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-rounded-x"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#9e9e9e"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10l4 4m0 -4l-4 4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
            </div>
          </div>
          <div className={Style.centercontent}>
            <label>
              NOMBRE
              <input type="text" name="nombre" required />
            </label>
            <label>
              CUMPLEAÑOS
              <input type="date" name="cumpleaños" required />
            </label>
          </div>
          <div className={Style.centercontent}>
            <label>
              COLOR DE OJOS
              <input type="text" name="colorOjos" />
            </label>
            <label>
              COLOR DE PELO
              <input type="text" name="colorPelo" />
            </label>
          </div>
          <div className={Style.centercontent}>
            <fieldset>
              <legend className={Style.legend}>GÉNERO</legend>
              <div className={Style.centerOptions}>
                <label className={Style.radiolabel}>
                  <input type="radio" name="genero" value="Mujer" /> Mujer
                </label>
                <label className={Style.radiolabel}>
                  <input type="radio" name="genero" value="Hombre" /> Hombre
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend className={Style.legend}>POSICIÓN</legend>
              <div className={Style.centerOptions}>
                <label className={Style.radiolabel}>
                  <input type="radio" name="posicion" value="Estudiante" />
                  Estudiante
                </label>
                <label className={Style.radiolabel}>
                  <input type="radio" name="posicion" value="Staff" /> Staff
                </label>
              </div>
            </fieldset>
          </div>
          <label>
            FOTOGRAFIA (input type file):
            <input type="file" name="fotografia" />
          </label>
          <div className={Style.containerButtton}>
            <button
              className={`${Style.button} ${isActive ? Style.active : ""}`}
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
