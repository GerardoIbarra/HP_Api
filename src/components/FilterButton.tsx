import React from "react";
import Style from "../styles/home.module.css";

interface FilterButtonProps {
  filter: string | null;
  setFilter: (filter: string | null) => void;
  targetFilter: string;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  filter,
  setFilter,
  targetFilter,
  label,
}) => (
  <button
    onClick={() => setFilter(filter === targetFilter ? null : targetFilter)}
    className={`${Style.button} ${filter === targetFilter ? Style.active : ""}`}
  >
    {label}
  </button>
);

export default FilterButton;
