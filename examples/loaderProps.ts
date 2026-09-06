/**
 * Loaders take different size props (`size` vs `height`/`width`/...), so the
 * size control scales each loader's own defaults instead of passing one value.
 */
const defaults: Record<string, Record<string, number>> = {
  BarLoader: { height: 4, width: 100 },
  BeatLoader: { size: 15, margin: 2 },
  BounceLoader: { size: 60 },
  CircleLoader: { size: 50 },
  ClimbingBoxLoader: { size: 15 },
  ClipLoader: { size: 35 },
  ClockLoader: { size: 50 },
  DotLoader: { size: 60 },
  FadeLoader: { height: 15, width: 5, radius: 2, margin: 2 },
  GridLoader: { size: 15, margin: 2 },
  HashLoader: { size: 50 },
  MoonLoader: { size: 60 },
  PacmanLoader: { size: 25, margin: 2 },
  PropagateLoader: { size: 15 },
  PuffLoader: { size: 60 },
  PulseLoader: { size: 15, margin: 2 },
  RingLoader: { size: 60 },
  RiseLoader: { size: 15, margin: 2 },
  RotateLoader: { size: 15, margin: 2 },
  ScaleLoader: { height: 35, width: 4, radius: 2, margin: 2 },
  SkewLoader: { size: 20 },
  SquareLoader: { size: 50 },
  SyncLoader: { size: 15, margin: 2 },
};

export interface SpinnerSettings {
  color: string;
  scale: number;
  speed: number;
}

/** A loader's size props scaled by `scale`; `sizeProps(name, 1)` are its defaults. */
export function sizeProps(name: string, scale: number): Record<string, number> {
  return Object.fromEntries(
    Object.entries(defaults[name] ?? {}).map(([prop, value]) => [
      prop,
      Math.max(1, Math.round(value * scale)),
    ])
  );
}

/** The JSX a user would paste, omitting anything left at its default. */
export function buildSnippet(name: string, { color, scale, speed }: SpinnerSettings): string {
  const props = [`color="${color}"`];
  const defaultSizes = sizeProps(name, 1);

  for (const [prop, value] of Object.entries(sizeProps(name, scale))) {
    if (value !== defaultSizes[prop]) {
      props.push(`${prop}={${value}}`);
    }
  }

  if (speed !== 1) {
    props.push(`speedMultiplier={${speed}}`);
  }

  return `import { ${name} } from "react-spinners";\n\n<${name} ${props.join(" ")} />`;
}
