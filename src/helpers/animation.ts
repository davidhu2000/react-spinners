const injectedKeyframes = new Set<string>();
let animationStyleElement: HTMLStyleElement | null = null;

export const createAnimation = (loaderName: string, frames: string, suffix: string): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}`;

  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }

  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `;

  if (injectedKeyframes.has(keyFrames)) {
    return animationName;
  }

  if (!animationStyleElement) {
    animationStyleElement = document.createElement("style");
    document.head.appendChild(animationStyleElement);
  }

  animationStyleElement.textContent += keyFrames;
  injectedKeyframes.add(keyFrames);

  return animationName;
};
