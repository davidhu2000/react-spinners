export const createAnimation = (loaderName: string, frames: string, suffix: string): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}-${animationSuffix(10)}`;

  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }

  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

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

function animationSuffix(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
