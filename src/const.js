import Axios from 'axios';
// eslint-disable-next-line no-unused-vars
const instance = Axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    app_id: 'XXXXXXX',
    app_key: 'XXXXXXXXXXXXXXX',
  },
});
