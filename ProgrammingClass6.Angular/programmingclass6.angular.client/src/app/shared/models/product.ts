import { Manufacturer } from "./manufacturer";
import { ProductType } from "./productType";
import { UnitOfMeasure } from "./unitOfMeasure";

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  quantity?: number;
  unitPrice?: number;

  manufacturer?: Manufacturer;
  productType?: ProductType;
  unitOfMeasure?: UnitOfMeasure;
}
