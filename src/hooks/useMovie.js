import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

export default function useMovie() {
  return useContext(MovieContext);
}
