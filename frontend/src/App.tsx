import { FC, useState } from 'react';
import './App.css';
import { SandwichCard } from './components/SandwichCard';
import { OrderedSandwich, Sandwich } from './types';
import { sandwiches } from './sandwichData';

export const App: FC = () => {
  const [selectedSandwich, setSandwich] = useState<Sandwich | null>(null);

  const orderedSandwiches: OrderedSandwich[] = [
    {
      sandwichId: 1,
      name: 'Ham & Cheese',
      status: 'ready',
      id: 'kahsdjkhfjkl',
    },
  ];

  const handleSandwichClick = (id: number) => {
    const clickedSandwich = sandwiches.filter(
      (sandwich) => id === sandwich.sandwichId
    );
    setSandwich(clickedSandwich[0]);
  };

  const handleClearOrder = () => {
    setSandwich(null);
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

      <div className="App__sandwichOrder">
        <h3>Sandwich to Order</h3>
        {selectedSandwich ? (
          <div className="App__order">
            <p>{selectedSandwich.name}</p>
            <div className="App__orderButtons">
              <button>Place Order</button>
              <button onClick={handleClearOrder}>Clear Order</button>
            </div>
          </div>
        ) : (
          <p>No sandwich selected.</p>
        )}
      </div>
      <div className="App__orderedSandwiches">
        <h3>Ordered Sandwiches</h3>
        <div className="App__orderedSandwichItem">
          <p>Sandwich</p>
          <p>Status</p>
        </div>
        {orderedSandwiches.map((sandwich) => (
          <div className="App__orderedSandwichItem" key={sandwich.id}>
            <p>{sandwich.name}</p>
            <p>{sandwich.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
