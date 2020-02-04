import Axios from 'axios';
const baseUrl = process.env.BASE_URL;
export const Connector = Axios.create({ baseURL: baseUrl });
