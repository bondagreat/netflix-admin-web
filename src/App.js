import 'flowbite';
import useLoading from './hooks/useLoading';
import Router from './routes/Router';
import Spinner from './components/Spinner';

export default function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  );
}
