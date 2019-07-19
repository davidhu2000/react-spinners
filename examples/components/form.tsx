import * as React from "react";

interface FormProps {
  inputs: {
    [key: string]: number | string;
  };
  update: (field: string) => (event: any) => void;
}

type FormType = (arg: FormProps) => JSX.Element;

const Form: FormType = ({ inputs, update }: FormProps): JSX.Element => (
  <div className="spinner-form">
    {Object.keys(inputs).map((name: string) => (
      <div className="spinner-form-input" key={name}>
        <input
          name={name}
          type={name === "margin" ? "text" : "number"}
          value={inputs[name]}
          onChange={update(name)}
        />
        <span className="bar" />
        <label htmlFor={name}>{name}</label>
      </div>
    ))}
  </div>
);

export { Form };
