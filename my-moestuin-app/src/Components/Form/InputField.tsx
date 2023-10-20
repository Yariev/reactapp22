import React from "react";
import { useFormContext, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  register: UseFormRegister<any>;
  id: string;

}

export const InputField = ({props: InputFieldProps}) => {
  const { register } = useFormContext();

  return (
    <div className="form-group">
      <label htmlFor={id}>{props.label.charAt(0).toUpperCase()}:</label>
      <input className="form-control" id={id} {...register(props.name)} />
    </div>
  );
};
