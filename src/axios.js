import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-market-clone.cloudfunctions.net/api'
});

export default instance;