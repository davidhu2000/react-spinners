import * as React from "react";

interface InputProps {
  value: number;
  update: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const speedMultiplierInput = ({ value, update }: InputProps): JSX.Element => (
  <div className="speed-multiplier-input">
    <label htmlFor="speedMultiplier">speedMultiplier</label>
    <input name="speedMultiplier" type={"number"} value={value} onChange={update} />
    <span className="bar" />
  </div>
);

export default speedMultiplierInput;
