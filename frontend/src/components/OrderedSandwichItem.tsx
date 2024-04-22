import { FC, useEffect, useState } from 'react';
import { OrderedSandwich, sandwicheMap, OrderStatus } from '../types';
import { getSandwichStatus } from '../requestFunctions';

type Props = {
  sandwich: OrderedSandwich;
};

export const OrderedSandwichItem: FC<Props> = ({ sandwich }) => {
  const [sandwichSatus, setStatus] = useState<OrderStatus>(sandwich.status);

  const handleStatusRequest = async (id: string) => {
    const result = await getSandwichStatus(id);
    setStatus(result.status);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      handleStatusRequest(sandwich.id);
    }, 1000);

    if (sandwichSatus === 'ready') {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [sandwich.id, sandwichSatus]);

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
