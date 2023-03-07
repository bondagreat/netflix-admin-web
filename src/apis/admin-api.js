import axios from '../config/axios';

export const login = (input) => axios.post('/auth-admin/login', input);
export const getAllUser = () => axios.get('/admin/getAllUser');
