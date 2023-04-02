export interface Product {
  name: string;
  id: string | number;
  date: string;
  brand: string;
  color: string;
  img: string;
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
