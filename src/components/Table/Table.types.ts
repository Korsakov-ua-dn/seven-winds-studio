export type Data = {
  format: Format;
  title: string;
  width?: number;
};
export type Format = "price" | "date" | "number" | "string";
