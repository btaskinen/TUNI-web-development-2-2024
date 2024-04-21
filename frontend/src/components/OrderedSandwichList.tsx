import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOrderedSandwiches } from '../requestFunctions';
import { sandwicheMap } from '../types';
import './OrderedSandwichList.css';

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
          <div className="OrderedSandwich__item" key={sandwich.id}>
            <p>{sandwicheMap[sandwich.sandwichId]}</p>
            <p>{sandwich.status}</p>
          </div>
        ))}
      {!data && (
        <div className="OrderedSandwich__item">
          <p>No ordered sandwiches.</p>
        </div>
      )}
    </div>
  );
};
