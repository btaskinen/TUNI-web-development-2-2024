import axios from 'axios';
import { OrderedSandwich, SandwichId } from './types';
import { apiUrl } from './config';

console.log(apiUrl);

const baseUrl = `${apiUrl}/v1`;

console.log(baseUrl);

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
