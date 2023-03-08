import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import { SearchIcon } from '../images';
import { TableMovie } from '../components/adminpages/TableMovie';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieSearchForm from '../components/adminpages/MovieSearchForm';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import useMovie from '../hooks/useMovie';

export default function AdminManageMoviePage() {
  const { movies, fetchMovie } = useMovie();
  const [showMovie, setShowMovie] = useState([]);
  const dispatch = useDispatch();

  const updateShowMovie = (searchMovie) => {
    const movieTemp = movies.filter((el) => {
      if (!searchMovie) {
        return null;
      }
      return el.name.toLowerCase().includes(searchMovie?.toLowerCase());
    });
    setShowMovie(movieTemp);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className=" top-0 left-0 right-0 bg-black h-[100px] ">
        <div className="flex justify-center">
          <div className=" h-[70px] w-full flex">
            <Brand />
          </div>
          <div className=" h-[100px]  w-full ">
            <div className="flex items-center justify-end gap-3 mr-10 mt-8">
              <MenuItemRight>
                <SearchIcon />
                <MovieSearchForm updateShowMovie={updateShowMovie} />
              </MenuItemRight>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  w-screen h-screen">
        <div className="pt-10 w-[230px] pl-5 bg-zinc-800">
          <div>
            <div className="flex flex-row gap-3">
              {/* <Link to="#" className="fill-white ">
                <HomeLogo />
              </Link>
              <Link to="#" className="text-white mt-2">
                Home
              </Link> */}
            </div>
            <div className="pl-11 flex flex-col">
              <Link to="/admin/user" className="text-white mt-2">
                Users
              </Link>
              <Link to="/admin/movie" className="text-white mt-2">
                Movies
              </Link>
            </div>
          </div>
          <button
            onClick={() => dispatch(logout())}
            className="pl-11 text-white mt-8"
          >
            <p>Log out</p>
          </button>
        </div>
        <div className="bg-neutral-500 flex flex-grow flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-white mt-2 ml-2">Movies</p>
            <div className=" w-[90%]  overflow-hidden mt-5 m-auto">
              <TableMovie showMovie={showMovie} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
