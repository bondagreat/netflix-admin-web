import 'flowbite';
import useLoading from './hooks/useLoading';
import Router from './routes/Router';
import Spinner from './components/Spinner';
import { useEffect } from 'react';
import {
  ageAPI,
  castAPI,
  genreAPI,
  languageAPI,
  moodAPI,
} from './redux/movieSlice';
import { useDispatch } from 'react-redux';

export default function App() {
  const { loading } = useLoading();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moodAPI());
    dispatch(genreAPI());
    dispatch(castAPI());
    dispatch(ageAPI());
    dispatch(languageAPI());
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  );
}
