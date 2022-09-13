import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://development.triunfodigital.com.br/'
});