import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  //baseURL: 'http://localhost:3000/',
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

export { registerUser };
