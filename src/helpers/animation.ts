export const createAnimation = (loaderName: string, frames: string, suffix = ""): string => {
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

  const animationName = `react-spinners-${loaderName}${suffix ? `-${suffix}` : ""}`;

  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `;

  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0);
  }

  return animationName;
};
