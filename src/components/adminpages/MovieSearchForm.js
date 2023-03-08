import useMovie from '../../hooks/useMovie';

export default function MovieSearchForm({ updateShowMovie }) {
  const { searchMovie, setSearchMovie } = useMovie();

  const handleChangeSearchMovie = (e) => {
    if (e.target.value === '') {
      setSearchMovie(null);
      updateShowMovie(searchMovie);
    }
    setSearchMovie(e.target.value.trim());
    updateShowMovie(e.target.value.trim());
  };
  return (
    <input
      className="border-2 border-white bg-black text-white"
      onChange={(e) => handleChangeSearchMovie(e)}
    />
  );
}
