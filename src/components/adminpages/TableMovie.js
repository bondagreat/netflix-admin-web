import { useState } from 'react';
import img1 from '../../assets/images/img1.png';
import { BinIcon, FilmIcon, MovieIcon, WriteEditIcon } from '../../images';

import { Link } from 'react-router-dom';
import ModalEditPicture from '../global/ModalEditPicture';
import ModalEditVideo from '../global/ModalEditVideo';
import ModalEditTrailer from '../global/ModalEditTrailer';
import CreatePictureForm from '../global/CreatePictureForm';

export function TableMovie({ showMovie }) {
  const [currentPage, setCurrentPage] = useState(1);
  const movieListPerPage = 8;
  const lastIndex = currentPage * movieListPerPage;
  const firstIndex = lastIndex - movieListPerPage;
  const ListMovie = showMovie?.slice(firstIndex, lastIndex);
  const page = Math.ceil(showMovie.length / movieListPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  const [openPicture, setOpenPicture] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [openTrailer, setOpenTrailer] = useState(false);

  const [openCreateMovie, setOpenCreateMovie] = useState(false);

  const handleOpenPicture = () => {
    setOpenPicture(true);
  };
  const handleClosePicture = () => {
    setOpenPicture(false);
  };
  const handleOpenVideo = () => {
    setOpenVideo(true);
  };
  const handleCloseVideo = () => {
    setOpenVideo(false);
  };
  const handleOpenTrailer = () => {
    setOpenTrailer(true);
  };
  const handleCloseTrailer = () => {
    setOpenTrailer(false);
  };
  const handleOpenCreateMovie = () => {
    setOpenCreateMovie(true);
  };
  const handleCloseCreateMovie = () => {
    setOpenCreateMovie(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {/* table */}
            <table className="min-w-full text-left text-sm font-light">
              {/* headtable */}
              <thead className="bg-neutral-600 text-lg text-black ">
                <tr className="text-center ">
                  <th scope="col" className="px-6 py-4 w-20">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-4 w-36">
                    Movie
                  </th>
                  <th scope="col" className="px-6 py-4 w-96">
                    Movie name
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Length
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Genres
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <div className="flex justify-center space-x-2">
                      <button
                        id="movie"
                        type="button"
                        onClick={handleOpenCreateMovie}
                        className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
                      >
                        Add movie
                      </button>
                      <CreatePictureForm
                        show={openCreateMovie}
                        setClose={handleCloseCreateMovie}
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              {/* bodytable */}
              <tbody>
                {ListMovie.map((e) => (
                  <tr
                    key={e.id}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-400 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center text-white"
                  >
                    <td className="whitespace-nowrap px-6 py-4 ">{e.id}</td>
                    <td className="whitespace-nowrap px-6 py-1 w-40">
                      <img src={e.cover} className="rounded-lg" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{e.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {e.length.split('.')[0] +
                        'h' +
                        ' ' +
                        e.length.split('.')[1] +
                        'm'}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {e?.MovieGenres?.[0]?.Genre?.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 mt-3 flex justify-center gap-2">
                      <button
                        onClick={(e) => console.log(e)}
                        className="opacity-60 hover:opacity-100"
                      >
                        <BinIcon />
                      </button>

                      <button
                        id="picture"
                        type="button"
                        className="opacity-60 hover:opacity-100"
                        onClick={handleOpenPicture}
                      >
                        <WriteEditIcon />
                      </button>
                      <ModalEditPicture
                        show={openPicture}
                        setClose={handleClosePicture}
                      />
                      <button
                        id="video"
                        type="button"
                        className="opacity-60 hover:opacity-100"
                        onClick={handleOpenVideo}
                      >
                        <MovieIcon />
                      </button>
                      <ModalEditVideo
                        show={openVideo}
                        setClose={handleCloseVideo}
                      />
                      <button
                        id="trailer"
                        type="button"
                        className="opacity-60 hover:opacity-100"
                        onClick={handleOpenTrailer}
                      >
                        <FilmIcon />
                      </button>
                      <ModalEditTrailer
                        show={openTrailer}
                        setClose={handleCloseTrailer}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-3">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <div
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:text-blue-700 focus:bg-blue-100"
                onClick={prePage}
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </li>
            {numbers.map((n, i) => (
              <li key={i}>
                <Link
                  to="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:text-blue-700 focus:bg-blue-100"
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </Link>
              </li>
            ))}

            <li>
              <div
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:text-blue-700 focus:bg-blue-100"
                onClick={nextPage}
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== page) {
      setCurrentPage(currentPage + 1);
    }
  }
}
