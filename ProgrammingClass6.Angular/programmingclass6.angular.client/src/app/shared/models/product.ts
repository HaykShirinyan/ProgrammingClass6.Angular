import { Manufacturer } from "./manufacturer";

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  quantity?: number;
  unitPrice?: number;

  manufacturer?: Manufacturer;
}
