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
