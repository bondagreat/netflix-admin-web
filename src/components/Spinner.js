import ClipLoader from 'react-spinners/ClipLoader';
import useLoading from '../hooks/useLoading';

export default function Spinner() {
  const { loading } = useLoading();

  return (
    <div className="absolute w-screen h-screen bg-black z-[1000] flex justify-center items-center">
      <ClipLoader
        color="#ff0000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
