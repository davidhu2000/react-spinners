import * as React from "react";
import { createRoot } from "react-dom/client";

import { ControlValues, Controls, InstallCommand, SpinnerCard, ThemeToggle } from "./components";
import * as Spinners from "../src";
import "./styles.css";

const loaders = Object.entries(Spinners) as [string, React.ComponentType<any>][];

const DEFAULTS: ControlValues = { query: "", color: "#36d7b7", scale: 1, speed: 1 };

/** The controls and the spinner grid. Everything around them is static HTML. */
function Gallery() {
  const [values, setValues] = React.useState(DEFAULTS);
  const { query, color } = values;

  // The chosen spinner color doubles as the page accent.
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", color);
  }, [color]);

  const needle = query.trim().toLowerCase();
  const results = loaders.filter(([name]) => name.toLowerCase().includes(needle));

  function update(partial: Partial<ControlValues>) {
    setValues((current) => ({ ...current, ...partial }));
  }

  return (
    <>
      <Controls
        values={values}
        onChange={update}
        onReset={() => setValues(DEFAULTS)}
        resultCount={results.length}
        totalCount={loaders.length}
      />

      {results.length > 0 ? (
        <div className="grid">
          {results.map(([name, Spinner]) => (
            <SpinnerCard key={name} name={name} Spinner={Spinner} settings={values} />
          ))}
        </div>
      ) : (
        <p className="empty">
          No spinner matches “{query}”.{" "}
          <button type="button" className="link-button" onClick={() => update({ query: "" })}>
            Clear search
          </button>
        </p>
      )}
    </>
  );
}

function mount(id: string, element: React.ReactElement) {
  const node = document.getElementById(id);

  if (node) {
    createRoot(node).render(element);
  }
}

mount("theme-toggle", <ThemeToggle />);
mount("install", <InstallCommand />);
mount("root", <Gallery />);
