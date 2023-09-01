import { FC } from "react";

import { StCheckboxContainer, StIcon } from "./styled";

type CheckboxProps = {
  name: string;
  label: string;
  isChecked: boolean;
  handleChange: () => void;
};

export const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  isChecked,
  handleChange,
}) => (
  <StCheckboxContainer onClick={handleChange}>
    <input
      type="checkbox"
      name={name}
      checked={isChecked}
      onChange={handleChange}
    />
    {isChecked ? (
      <StIcon>
        <use href="/sprite.svg#checked"></use>
      </StIcon>
    ) : (
      <StIcon>
        <use href="/sprite.svg#unchecked"></use>
      </StIcon>
    )}
    <label htmlFor="name">{label}</label>
  </StCheckboxContainer>
);
