import React, { useState } from "react";
import Style from "../styles/modalNew.module.css";
import { addCharacterModal } from "../hook/Fetchdata";
import { CharacterModlAdd } from "@/interface";
import RadioField from "./RadioField";
import InputField from "./InputField";

interface ModalProps {
  onClose: () => void;
}

const AddModal: React.FC<ModalProps> = ({ onClose }) => {
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
    alive: true,
  });

  const [file, setFile] = useState<File | null>(null);

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default_HP");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dwhs64chr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        return data.secure_url;
      } else {
        throw new Error(data.error.message || "Error al subir la imagen");
      }
    } catch (error) {
      console.error("Error al subir imagen:", error);
      return null;
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = event.target;
    switch (type) {
      case "file":
        if (files?.[0]) {
          setFile(files[0]);
        }
        break;
      case "radio":
        if (name === "genero") {
          setFormData({
            ...formData,
            gender: value === "Hombre" ? "male" : "female",
          });
        } else if (name === "posicion") {
          setFormData({
            ...formData,
            hogwartsStudent: value === "Estudiante",
            hogwartsStaff: value === "Staff",
          });
        }
        break;
      default:
        setFormData({ ...formData, [name]: value });
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsActive(true);

    let imageUrl = formData.image;
    if (file) {
      imageUrl = await uploadImage(file);
      if (!imageUrl) {
        console.error("No se pudo subir la imagen.");
        setIsActive(false);
        return;
      }
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }

    const dataToSend: CharacterModlAdd = {
      ...formData,
      image: imageUrl || "",
      gender: formData.gender === "male" ? "male" : "female",
    };

    try {
      const endpoints = [
        "characters",
        formData.hogwartsStudent ? "students" : "staff",
      ];
      await Promise.all(
        endpoints.map((endpoint) => addCharacterModal(dataToSend, endpoint))
      );
      onClose();
    } catch (error) {
      console.error("Error al añadir personaje:", error);
    }

    setIsActive(false);
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
            <InputField
              label="NOMBRE"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="CUMPLEAÑOS"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.centercontent}>
            <InputField
              label="COLOR DE OJOS"
              type="text"
              name="eyeColour"
              value={formData.eyeColour}
              onChange={handleChange}
              required
            />
            <InputField
              label="COLOR DE PELO"
              type="text"
              name="hairColour"
              value={formData.hairColour}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.centercontent}>
            <fieldset>
              <legend className={Style.legend}>GÉNERO</legend>
              <div className={Style.centerOptions}>
                <RadioField
                  label="Mujer"
                  name="genero"
                  value="Mujer"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <RadioField
                  label="Hombre"
                  name="genero"
                  value="Hombre"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className={Style.legend}>POSICIÓN</legend>
              <div className={Style.centerOptions}>
                <RadioField
                  label="Estudiante"
                  name="posicion"
                  value="Estudiante"
                  checked={formData.hogwartsStudent}
                  onChange={handleChange}
                />
                <RadioField
                  label="Staff"
                  name="posicion"
                  value="Staff"
                  checked={formData.hogwartsStaff}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
          <InputField
            label="FOTOGRAFIA (input type file):"
            type="file"
            name="fotografia"
            onChange={(e) => {
              setFile(e.target.files ? e.target.files[0] : null);
            }}
          />
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
