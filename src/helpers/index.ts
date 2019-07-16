type RgbaFunction = (color: string, opacity: number) => string;

export const calculateRgba: RgbaFunction = (color, opacity): string => {
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

  let rgbValues = color
    .match(/.{2}/g)!
    .map((hex) => parseInt(hex, 16))
    .join(", ");
  return `rgba(${rgbValues}, ${opacity})`;
};

export * from "./proptypes";
