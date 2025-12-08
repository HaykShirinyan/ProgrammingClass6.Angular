import { Manufacturer } from "./manufacturer";

export interface UnitOfMeasures {
  id?: number;
  name?: string;
  type?: string;
  unitOfMeasureValue?: number;
  price?: number;
  quantity?: number;

  manufacturer?: Manufacturer;
}
