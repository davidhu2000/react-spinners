import * as React from "react";
import { createRoot } from "react-dom/client";

import { ControlValues, Controls, InstallCommand, SpinnerCard, ThemeToggle } from "./components";
import { GithubIcon } from "./components/Icons";
import * as Spinners from "../src";
import "./styles.css";

const REPO_URL = "https://github.com/davidhu2000/react-spinners";
const NPM_URL = "https://www.npmjs.com/package/react-spinners";

const loaders = Object.entries(Spinners) as [string, React.ComponentType<any>][];

const DEFAULTS: ControlValues = { query: "", color: "#36d7b7", scale: 1, speed: 1 };

function App() {
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
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top">
            react-spinners
          </a>

          <nav className="topbar-links">
            <a href="storybook">Storybook</a>
            <a href={REPO_URL} className="icon-button" aria-label="react-spinners on GitHub">
              <GithubIcon />
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">{loaders.length} loading spinners · zero dependencies</p>
          <h1>
            <span className="accent-text">React</span> Spinners
          </h1>
          <p className="hero-sub">Tune the color, size and speed, then copy the JSX.</p>

          <InstallCommand />
        </section>

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
      </main>

      <footer>
        <div className="footer-inner">
          <span>
            Built by <a href="https://www.davidhu.io">David Hu</a> · MIT licensed
          </span>
          <nav>
            <a href={REPO_URL}>GitHub</a>
            <a href={NPM_URL}>npm</a>
            <a href="https://www.davidhu.io/blog">Blog</a>
            <a href="https://magichour.ai">Magic Hour</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
