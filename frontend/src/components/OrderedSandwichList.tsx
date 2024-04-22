import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOrderedSandwiches } from '../requestFunctions';
import './OrderedSandwichList.css';
import { OrderedSandwichItem } from './OrderedSandwichItem';

export const OrderedSandwichList: FC = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['sandwiches'],
    queryFn: getOrderedSandwiches,
  });

  return (
    <div className="OrderedSandwiches">
      <h3>Ordered Sandwiches</h3>
      <div className="OrderedSandwich__item">
        <p>Sandwich</p>
        <p>Status</p>
      </div>
      {isFetching && (
        <div className="OrderedSandwich__item">
          <p>Data loading...</p>
        </div>
      )}
      {error && (
        <div className="OrderedSandwich__item">
          <p>Something went wrong.</p>
        </div>
      )}
      {data &&
        data.length > 0 &&
        data.map((sandwich) => (
          <OrderedSandwichItem key={sandwich.id} sandwich={sandwich} />
        ))}
      {data?.length === 0 && (
        <div className="OrderedSandwich__item">
          <p>No ordered sandwiches.</p>
        </div>
      )}
    </div>
  );
};
