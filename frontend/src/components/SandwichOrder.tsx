import { Dispatch, FC, SetStateAction } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSandwichOrder } from '../requestFunctions';
import { Sandwich, SandwichId } from '../types';
import './SandwichOrder.css';

type Props = {
  selectedSandwich: Sandwich | null;
  setSandwich: Dispatch<SetStateAction<Sandwich | null>>;
};

export const SandwichOrder: FC<Props> = ({ selectedSandwich, setSandwich }) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn: postSandwichOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sandwiches'] });
    },
  });

  const handleOrder = (id: SandwichId) => {
    console.log('Ordered Sandwich Id', id);
    mutate(id);
    setSandwich(null);
  };

  const handleClearOrder = () => {
    setSandwich(null);
  };

  return (
    <div className="SandwichOrder">
      <h3>Sandwich to Order</h3>
      {selectedSandwich && (
        <div className="SandwichOrder__order">
          <p>{selectedSandwich.name}</p>
          <div className="SandwichOrder__buttons">
            <button onClick={() => handleOrder(selectedSandwich.sandwichId)}>
              Place Order
            </button>
            <button onClick={handleClearOrder}>Clear Order</button>
          </div>
        </div>
      )}
      {!selectedSandwich && !error && !isPending && (
        <p>No sandwich selected.</p>
      )}
      {isPending && <p>Order is being processed...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};
