export type SandwichId = 1 | 2 | 3 | 4 | 5;

export type SandwichName =
  | 'Ham & Cheese'
  | 'Salami'
  | 'Tuna'
  | 'Tomato & Mozzarella'
  | 'Hummus';

type OrderStatus = 'ordered' | 'received' | 'InQueue' | 'ready';

export type Sandwich = {
  sandwichId: SandwichId;
  name: string;
};

export type OrderedSandwich = {
  sandwichId: SandwichId;
  name: string;
  status: OrderStatus;
  id: string;
};

export const sandwicheMap: Record<SandwichId, SandwichName> = {
  1: 'Ham & Cheese',
  2: 'Salami',
  3: 'Tuna',
  4: 'Tomato & Mozzarella',
  5: 'Hummus',
};
