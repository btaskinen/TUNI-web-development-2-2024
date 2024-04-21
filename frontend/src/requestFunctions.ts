import axios from 'axios';
import { OrderedSandwich, SandwichId } from './types';

const baseUrl = 'http://localhost:8080/v1';

export const getOrderedSandwiches = async (): Promise<OrderedSandwich[]> => {
  const { data } = await axios.get(`${baseUrl}/order`);
  return data;
};

export const postSandwichOrder = async (
  sandwichId: SandwichId
): Promise<OrderedSandwich> => {
  const { data } = await axios.post(`${baseUrl}/order`, sandwichId);
  return data;
};

export const getSandwichStatus = async (
  sandwichId: string
): Promise<OrderedSandwich> => {
  const { data } = await axios.get(`${baseUrl}/order/${sandwichId}`);
  return data;
};
