import * as React from "react";

import { CheckIcon, CopyIcon } from "./Icons";
import { buildSnippet, sizeProps, SpinnerSettings } from "../loaderProps";
import { useCopied } from "../useCopied";
import { LoaderHeightWidthRadiusProps, LoaderSizeMarginProps } from "../../src/helpers/props";

type LoaderProps = LoaderSizeMarginProps & LoaderHeightWidthRadiusProps;

interface SpinnerCardProps {
  name: string;
  Spinner: React.ComponentType<LoaderProps>;
  settings: SpinnerSettings;
}

function SpinnerCard({ name, Spinner, settings }: SpinnerCardProps) {
  const [copied, copy] = useCopied();

  return (
    <article className="card">
      <div className="card-stage">
        <Spinner
          color={settings.color}
          speedMultiplier={settings.speed}
          {...sizeProps(name, settings.scale)}
        />
      </div>

      <div className="card-meta">
        <a className="card-name" href={`storybook?path=/docs/${name.toLowerCase()}--docs`}>
          {name}
        </a>

        <button
          type="button"
          className={`icon-button${copied ? " is-copied" : ""}`}
          onClick={() => copy(buildSnippet(name, settings))}
          aria-label={`Copy ${name} JSX`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </article>
  );
}

export default SpinnerCard;
