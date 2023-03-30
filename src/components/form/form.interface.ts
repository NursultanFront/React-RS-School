export interface Product {
  name: string | undefined;
  id: string | number | undefined;
  date: string | undefined;
  brand: string | undefined;
  color: string | undefined;
  img: string | undefined;
}

export interface OptionValues {
  id: number;
  brand: OptionEnum;
}

export interface Options {
  defaultValue: string;
  values: OptionValues[];
}

export interface Inputs {
  text: string;
  date: string;
  options: OptionEnum;
  file: FileList | null;
  color: string;
  check: string;
}

export enum OptionEnum {
  Samsung = 'Samsung',
  Apple = 'Apple',
  Xiaomi = 'Xiaomi',
}
