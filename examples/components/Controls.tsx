import * as React from "react";

import ColorPicker from "./ColorPicker";
import { SearchIcon } from "./Icons";

export interface ControlValues {
  query: string;
  color: string;
  scale: number;
  speed: number;
}

interface ControlsProps {
  values: ControlValues;
  onChange: (values: Partial<ControlValues>) => void;
  onReset: () => void;
  resultCount: number;
  totalCount: number;
}

function Controls({ values, onChange, onReset, resultCount, totalCount }: ControlsProps) {
  const { query, color, scale, speed } = values;

  return (
    <div className="controls">
      <div className="controls-inner">
        <label className="search">
          <SearchIcon />
          <input
            type="search"
            value={query}
            placeholder="Search spinners"
            onChange={(event) => onChange({ query: event.target.value })}
            aria-label="Search spinners"
          />
          <span className="search-count">
            {resultCount}/{totalCount}
          </span>
        </label>

        <div className="control">
          <span className="control-label">Color</span>
          <ColorPicker color={color} onChange={(next) => onChange({ color: next })} />
        </div>

        <div className="control">
          <span className="control-label">
            Size <span className="control-value">{scale.toFixed(2)}×</span>
          </span>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.05}
            value={scale}
            onChange={(event) => onChange({ scale: Number(event.target.value) })}
            aria-label="Size scale"
          />
        </div>

        <div className="control">
          <span className="control-label">
            Speed <span className="control-value">{speed.toFixed(2)}×</span>
          </span>
          <input
            type="range"
            min={0.25}
            max={3}
            step={0.05}
            value={speed}
            onChange={(event) => onChange({ speed: Number(event.target.value) })}
            aria-label="Speed multiplier"
          />
        </div>

        <button type="button" className="reset" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Controls;
