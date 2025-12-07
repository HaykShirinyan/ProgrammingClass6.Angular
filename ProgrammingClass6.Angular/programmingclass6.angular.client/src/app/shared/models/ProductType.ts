import { Manufacturer } from "./manufacturer";

export interface ProductTypes{
  id?:number;
  name?:string;
  brand?:string;
  type?:string;
  price?:number;
  quantity?: number;

  manufacturer?: Manufacturer;
}
