import * as Loaders from "esm/index";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 12,
      }}
    >
      <h1>Test App</h1>
      <Loaders.BarLoader />
      <Loaders.BeatLoader />
      <Loaders.BounceLoader />
    </div>
  );
}
