import React from "react";
import Style from "../styles/modalNew.module.css";

interface RadioFieldProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioField: React.FC<RadioFieldProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={Style.radiolabel}
    />
    {label}
  </label>
);

export default RadioField;
