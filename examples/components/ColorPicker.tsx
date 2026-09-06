import * as React from "react";
import { HexColorInput, HexAlphaColorPicker } from "react-colorful";

const PRESETS = ["#36d7b7", "#6366f1", "#ec4899", "#f59e0b", "#22d3ee", "#a3e635", "#f43f5e"];

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="color-control" ref={containerRef}>
      <div className="swatches">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            className={`swatch${preset === color.toLowerCase() ? " is-active" : ""}`}
            style={{ "--swatch": preset } as React.CSSProperties}
            onClick={() => onChange(preset)}
            aria-label={`Use ${preset}`}
          />
        ))}
      </div>

      <button
        type="button"
        className="custom-color"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        aria-expanded={open}
      >
        <span className="custom-color-chip" style={{ background: color }} />
        <span className="custom-color-value">{color}</span>
      </button>

      {open && (
        <div className="picker-popover" role="dialog" aria-label="Custom color">
          <HexAlphaColorPicker color={color} onChange={onChange} />
          <HexColorInput
            className="picker-input"
            color={color}
            onChange={onChange}
            prefixed
            alpha
          />
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
