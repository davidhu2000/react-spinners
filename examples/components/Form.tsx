import * as React from "react";

interface FormProps {
  inputs: {
    [key: string]: number | string | undefined;
  };
  update: (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ inputs, update }: FormProps): JSX.Element => (
  <div className="spinner-form">
    {Object.keys(inputs).map((name: string) => (
      <div className="spinner-form-input" key={name}>
        <input name={name} type={"text"} value={inputs[name]} onChange={update(name)} />
        <span className="bar" />
        <label htmlFor={name}>{name}</label>
      </div>
    ))}
  </div>
);

export default Form;
