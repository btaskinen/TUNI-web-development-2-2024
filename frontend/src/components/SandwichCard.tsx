import { FC } from 'react';
import { Sandwich } from '../types';
import './SandwichCard.css';

type Props = {
  sandwich: Sandwich;
  onClick: () => void;
};

export const SandwichCard: FC<Props> = ({ sandwich, onClick }) => {
  return (
    <button className="SandwichCard" onClick={onClick}>
      {sandwich.name}
    </button>
  );
};
