import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOrderedSandwiches } from '../requestFunctions';
import './OrderedSandwichList.css';
import { OrderedSandwichItem } from './OrderedSandwichItem';

export const OrderedSandwichList: FC = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['sandwiches'],
    queryFn: getOrderedSandwiches,
  });

  if (isFetching) return <div>Data loading...</div>;

  return (
    <div className="OrderedSandwiches">
      <h3>Ordered Sandwiches</h3>
      <div className="OrderedSandwich__item">
        <p>Sandwich</p>
        <p>Status</p>
      </div>
      {data &&
        data.map((sandwich) => (
          <OrderedSandwichItem key={sandwich.id} sandwich={sandwich} />
        ))}
      {!data && (
        <div className="OrderedSandwich__item">
          <p>No ordered sandwiches.</p>
        </div>
      )}
    </div>
  );
};
