import { FC, useState } from 'react';
import { OrderedSandwich, sandwicheMap, OrderStatus } from '../types';
import './OrderedSandwichItem.css';

type Props = {
  sandwich: OrderedSandwich;
};

export const OrderedSandwichItem: FC<Props> = ({ sandwich }) => {
  const [sandwichSatus, setStatus] = useState<OrderStatus>(sandwich.status);

  const handleStatusRequest = (id: string) => {
    console.log('request status', id);
    setStatus(sandwich.status);
  };

  return (
    <div className="OrderedSandwich__item" key={sandwich.id}>
      <p>{sandwicheMap[sandwich.sandwichId]}</p>
      <div className="OrderedSandwich__status">
        <p>{sandwichSatus}</p>
        <button onClick={() => handleStatusRequest(sandwich.id)}>
          Check Status
        </button>
      </div>
    </div>
  );
};
