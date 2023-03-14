import axios from '../config/axios';

export const getMood = () => axios.get('/admin/getMood');
export const getGenre = () => axios.get('/admin/getGenre');
export const getCast = () => axios.get('/admin/getCast');
export const getAge = () => axios.get('/admin/getAge');
export const getLanguage = () => axios.get('/admin/getLanguage');
