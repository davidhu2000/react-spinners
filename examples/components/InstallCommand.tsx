import * as React from "react";

import { CheckIcon, CopyIcon } from "./Icons";
import { useCopied } from "../useCopied";

const COMMANDS = {
  npm: "npm install react-spinners",
  yarn: "yarn add react-spinners",
  pnpm: "pnpm add react-spinners",
  bun: "bun add react-spinners",
};

type Manager = keyof typeof COMMANDS;

const MANAGERS = Object.keys(COMMANDS) as Manager[];

function InstallCommand() {
  const [manager, setManager] = React.useState<Manager>("npm");
  const [copied, copy] = useCopied();

  return (
    <div className="install">
      <div className="install-tabs">
        {MANAGERS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={key === manager}
            className={`install-tab${key === manager ? " is-active" : ""}`}
            onClick={() => setManager(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="install-command">
        {/* Every command shares one grid cell, so the widest fixes the box
            width and switching tabs does not resize it. */}
        <code>
          {MANAGERS.map((key) => (
            <span key={key} aria-hidden={key !== manager}>
              <span className="install-prompt">$</span> {COMMANDS[key]}
            </span>
          ))}
        </code>

        <button
          type="button"
          className={`icon-button${copied ? " is-copied" : ""}`}
          onClick={() => copy(COMMANDS[manager])}
          aria-label="Copy install command"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}

export default InstallCommand;
