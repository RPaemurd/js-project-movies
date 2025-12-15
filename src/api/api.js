const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}` 
  }
};