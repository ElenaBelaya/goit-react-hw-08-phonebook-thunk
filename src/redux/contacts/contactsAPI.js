import axios from 'axios';

axios.defaults.baseURL = 'https://62fdcaf56e617f88deaebcea.mockapi.io/';

export const getContacts = async () => {
  const responce = await axios.get('contacts');
  return responce.data;
};

export const addContacts = async contact => {
  const responce = await axios.post('contacts', contact);
  return responce.data;
};

export const removeContacts = async id => {
  const responce = await axios.delete(`contacts/${id}`);
  return responce.data;
};
