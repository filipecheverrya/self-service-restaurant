import axios from 'axios';

// const url = 'http://localhost:3300'
const url = 'https://self-service-restaurant-api.herokuapp.com'

export const FoodList = async () => {
  try {
    const response = await axios.get(`${url}/food`);
    return response;
  } catch (error) {
    console.log(error);
  }
} 

export const DrinkList = async () => {
  try {
    const response = await axios.get(`${url}/drink`);
    return response;
  } catch (error) {
    console.log(error);
  }
} 

export const SetOrder = async ({ tableNumber, isDelivered, order }) => {
  try {
    const response = await axios.post(`${url}/order`, {tableNumber, isDelivered, order});
    return response;
  } catch (error) {
    console.log(error);
  }
} 