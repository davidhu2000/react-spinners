const currentFrames = new Map<string, string>();
let animationStyleElement: HTMLStyleElement | null = null;
let animationStyleSheet: CSSStyleSheet | null = null;

export const createAnimation = (loaderName: string, frames: string, suffix: string): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}`;

  if (typeof window === "undefined" || !window.document) {
    return animationName;
  }

  if (!animationStyleElement || !document.head.contains(animationStyleElement)) {
    animationStyleElement = document.createElement("style");
    document.head.appendChild(animationStyleElement);
    animationStyleSheet = animationStyleElement.sheet;
    currentFrames.clear();
  }

  if (currentFrames.get(animationName) === frames) {
    return animationName;
  }

  if (!animationStyleSheet) {
    return animationName;
  }

  for (let i = animationStyleSheet.cssRules.length - 1; i >= 0; i--) {
    const rule = animationStyleSheet.cssRules[i];
    if (
      (rule as CSSKeyframesRule).name === animationName ||
      new RegExp(`^@(?:-webkit-)?keyframes\\s+${animationName}\\s*\\{`).test(rule.cssText)
    ) {
      animationStyleSheet.deleteRule(i);
    }
  }

  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `;

  animationStyleSheet.insertRule(keyFrames, animationStyleSheet.cssRules.length);
  currentFrames.set(animationName, frames);

  return animationName;
};
