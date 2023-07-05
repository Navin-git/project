import { FC, useState } from "react";
import { FormInputPropsTypes } from "../../../models";

export const FormInput: FC<FormInputPropsTypes> = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="w-full">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <div className="error">{errorMessage}</div>
      </div>
    </>
  );
};
