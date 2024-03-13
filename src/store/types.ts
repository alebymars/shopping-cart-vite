export interface InitialState {
  products: Product[];
  basket: Basket[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Basket {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
}
