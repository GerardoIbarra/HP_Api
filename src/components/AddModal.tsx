"use client";
import React, { useState } from "react";
import Style from "../styles/modalNew.module.css";
import { addCharacterModal } from "../hook/Fetchdata";
import { CharacterModlAdd } from "@/interface";

interface ModalProps {
  onClose: () => void;
}
const AddModal: React.FC<ModalProps> = function ({ onClose }) {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    image: undefined as string | undefined,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    setIsActive(!isActive);
    event.preventDefault();

    const dataToSend: CharacterModlAdd = {
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
      eyeColour: formData.eyeColour,
      hairColour: formData.hairColour,
      gender: formData.gender === "Hombre" ? "male" : "female",
      hogwartsStudent: formData.hogwartsStudent,
      hogwartsStaff: formData.hogwartsStaff,
      image: formData.image || "",
    };

    try {
      await addCharacterModal(dataToSend, "characters");
      await addCharacterModal(
        dataToSend,
        dataToSend.hogwartsStudent ? "students" : "staff"
      );
    } catch (error) {
      console.error("Error al añadir personaje:", error);
    }

    onClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = event.target;
    if (type === "file" && files?.[0]) {
      setFormData({ ...formData, image: files?.[0].name });
    } else if (type === "radio" && name === "genero") {
      setFormData({
        ...formData,
        gender: value === "Hombre" ? "male" : "female",
      });
    } else if (type === "radio" && name === "posicion") {
      setFormData({
        ...formData,
        hogwartsStudent: value === "Estudiante",
        hogwartsStaff: value === "Staff",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
                strokeWidth="1"
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
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CUMPLEAÑOS
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={Style.centercontent}>
            <label>
              COLOR DE OJOS
              <input
                type="text"
                name="eyeColour"
                value={formData.eyeColour}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              COLOR DE PELO
              <input
                type="text"
                name="hairColour"
                value={formData.hairColour}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={Style.centercontent}>
            <fieldset>
              <legend className={Style.legend}>GÉNERO</legend>
              <div className={Style.centerOptions}>
                <label className={Style.radiolabel}>
                  <input
                    type="radio"
                    name="genero"
                    value="Mujer"
                    checked={formData.gender === "female "}
                    onChange={handleChange}
                    required
                  />
                  Mujer
                </label>
                <label className={Style.radiolabel}>
                  <input
                    type="radio"
                    name="genero"
                    value="Hombre"
                    onChange={handleChange}
                    checked={formData.gender === "male"}
                    required
                  />
                  Hombre
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend className={Style.legend}>POSICIÓN</legend>
              <div className={Style.centerOptions}>
                <label className={Style.radiolabel}>
                  <input
                    type="radio"
                    name="posicion"
                    value="Estudiante"
                    onChange={handleChange}
                    checked={formData.hogwartsStudent}
                    required
                  />
                  Estudiante
                </label>
                <label className={Style.radiolabel}>
                  <input
                    type="radio"
                    name="posicion"
                    value="Staff"
                    onChange={handleChange}
                    checked={formData.hogwartsStaff}
                    required
                  />
                  Staff
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
