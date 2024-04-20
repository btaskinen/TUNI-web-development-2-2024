type OrderStatus = 'ordered' | 'received' | 'InQueue' | 'ready';

export type Sandwich = {
  sandwichId: number;
  name: string;
};

export type OrderedSandwich = {
  sandwichId: number;
  name: string;
  status: OrderStatus;
  id: string;
};
