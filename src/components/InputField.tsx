import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  ...props
}) => {
  if (type === "file") {
    return (
      <div>
        <label>{label}</label>
        <input type={type} name={name} onChange={onChange} {...props} />
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
};

export default InputField;
