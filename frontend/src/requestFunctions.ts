import axios from 'axios';
import { OrderedSandwich, SandwichId } from './types';

const baseUrl = 'http://localhost:8080/v1';

export const getOrderedSandwiches = async (): Promise<OrderedSandwich[]> => {
  try {
    const { data } = await axios.get(`${baseUrl}/order`);
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const postSandwichOrder = async (
  sandwichId: SandwichId
): Promise<OrderedSandwich> => {
  try {
    const { data } = await axios.post(`${baseUrl}/order`, sandwichId);
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getSandwichStatus = async (
  sandwichId: string
): Promise<OrderedSandwich> => {
  try {
    const { data } = await axios.get(`${baseUrl}/order/${sandwichId}`);
    return data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
};
