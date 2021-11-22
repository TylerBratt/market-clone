import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-market-clone.cloudfunctions.net/api'
  // 'http://localhost:5001/market-clone/us-central1/api'
});

export default instance;