import axios from 'axios';
import { OrderedSandwich } from './types';

const baseUrl = 'http://localhost:8080/v1';

export const getOrderedSandwiches = async (): Promise<OrderedSandwich[]> => {
  const { data } = await axios.get(`${baseUrl}/order`);
  return data;
};
