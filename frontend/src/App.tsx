import { FC, useState } from 'react';
import './App.css';
import { SandwichCard } from './components/SandwichCard';
import { Sandwich } from './types';
import { sandwiches } from './sandwichData';
import { OrderedSandwichList } from './components/OrderedSandwichList';
import { SandwichOrder } from './components/SandwichOrder';

export const App: FC = () => {
  const [selectedSandwich, setSandwich] = useState<Sandwich | null>(null);

  const handleSandwichClick = (id: number) => {
    const clickedSandwich = sandwiches.filter(
      (sandwich) => id === sandwich.sandwichId
    );
    setSandwich(clickedSandwich[0]);
  };

  return (
    <div className="App">
      <h1>Make Me A Sandwich</h1>
      <div className="App__sandwiches">
        <p>Select the sandwich you like to order.</p>
        <div className="App__sandwicheCardContainer">
          {sandwiches.map((sandwich) => (
            <SandwichCard
              key={sandwich.sandwichId}
              sandwich={sandwich}
              onClick={() => handleSandwichClick(sandwich.sandwichId)}
            />
          ))}
        </div>
      </div>
      <SandwichOrder
        selectedSandwich={selectedSandwich}
        setSandwich={setSandwich}
      />
      <OrderedSandwichList />
    </div>
  );
};
