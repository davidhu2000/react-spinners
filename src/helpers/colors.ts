enum BasicColors {
  maroon = "#800000",
  red = "#FF0000",
  orange = "#FFA500",
  yellow = "#FFFF00",
  olive = "#808000",
  green = "#008000",
  purple = "#800080",
  fuchsia = "#FF00FF",
  lime = "#00FF00",
  teal = "#008080",
  aqua = "#00FFFF",
  blue = "#0000FF",
  navy = "#000080",
  black = "#000000",
  gray = "#808080",
  silver = "#C0C0C0",
  white = "#FFFFFF",
}

const handleRgbColorString = (color: string, opacity: number): string => {
  // rgb(a)(255 255 255 / 80%)
  if (color.includes("/")) {
    return color.replace("rgb(", "rgba(");
  }

  const rgbValues = color.substring(color.startsWith("rgba(") ? 5 : 4, color.length - 1).trim();
  const splittedByCommas = rgbValues.split(",");

  // rgb(a)(255, 255, 255, 0.8)
  if (splittedByCommas.length === 4) {
    return color.replace("rgb(", "rgba(");
  }

  // rgb(a)(255, 255, 255)
  if (splittedByCommas.length === 3) {
    return `rgba(${rgbValues}, ${opacity})`;
  }

  // rgb(a)(255 255 255)
  return `rgba(${rgbValues} / ${opacity})`;
};

export const calculateRgba = (color: string, opacity: number): string => {
  if (color.startsWith("rgb")) {
    return handleRgbColorString(color, opacity);
  }

  if (Object.keys(BasicColors).includes(color)) {
    color = BasicColors[color as keyof typeof BasicColors];
  }

  if (color[0] === "#") {
    color = color.slice(1);
  }

  if (color.length === 3) {
    let res = "";
    color.split("").forEach((c: string) => {
      res += c;
      res += c;
    });
    color = res;
  }

  const rgbValues: string = (color.match(/.{2}/g) || []).map((hex: string) => parseInt(hex, 16)).join(", ");

  return `rgba(${rgbValues}, ${opacity})`;
};
