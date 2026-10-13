const currentFrames = new Map<string, string>();
let animationStyleElement: HTMLStyleElement | null = null;
let animationStyleSheet: CSSStyleSheet | null = null;

export const createAnimation = (loaderName: string, frames: string, suffix: string): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}`;

  if (typeof window === "undefined" || !window.document) {
    return animationName;
  }

  if (
    !animationStyleElement ||
    !document.head.contains(animationStyleElement) ||
    !animationStyleSheet
  ) {
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

  // This stylesheet only ever holds keyframe rules inserted below, so an existing
  // rule for this animation can only be present when the name is already tracked.
  if (currentFrames.has(animationName)) {
    for (let i = animationStyleSheet.cssRules.length - 1; i >= 0; i--) {
      if ((animationStyleSheet.cssRules[i] as CSSKeyframesRule).name === animationName) {
        animationStyleSheet.deleteRule(i);
        break;
      }
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
