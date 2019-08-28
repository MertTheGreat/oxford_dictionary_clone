import Axios from 'axios';
// eslint-disable-next-line no-unused-vars
const instance = Axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    app_id: '14023053',
    app_key: '3f1582861bf66c20b2be262287b0b4ea',
  },
});
