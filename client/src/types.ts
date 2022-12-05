export interface CustomerDataItem {
  id: number;
  name: string;
  max: number;
  min: number;
  specificFruitLimits: SFL[];
}

export interface SFL {
  id: number;
  min: number;
  max: number;
  productId: number;
  productName: string;
}

export interface IDictionary<TValue> {
  [id: string]: TValue;
}

export interface CustomerDB {
  id: number;
  alpha_identifier: string;
  name: string;
  max: number;
  min: number;
}

export interface ProductDB {
  id: number;
  product_name: string;
}

export interface SpecificFruitLimitDB {
  id: number;
  customer_id: number;
  product_id: number;
  min: number;
  max: number;
}
