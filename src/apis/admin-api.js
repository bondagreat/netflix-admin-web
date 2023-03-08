import axios from '../config/axios';

export const login = (input) => axios.post('/auth-admin/login', input);
export const getAllUser = () => axios.get('/admin/getAllUser');
export const getAllMovie = () => axios.get('/admin/getAllMovie');

export const addMovie = (input) => axios.post('/admin/addMovie', input);
export const addCover = (input) => axios.patch('/admin/addCover', input);
export const addLogo = (input) => axios.patch('/admin/addLogo', input);
export const addVideo = (input) => axios.patch('/admin/addVideo', input);
export const addTrailer = (input) => axios.patch('/admin/addTrailer', input);

export const deleteMovie = (id) => axios.delete(`/admin/deleteMovie/${id}`);
