import { useState } from 'react';
import img1 from '../../assets/img1.png';
import { BinIcon, FilmIcon, MovieIcon, WriteEditIcon } from '../../images';

import { Link } from 'react-router-dom';

const mockData = [
  { id: 1, name: 'movie1', length: '2h 10m', genres: 'comedies' },
  { id: 2, name: 'movie2', length: '2h 10m', genres: 'comedies' },
  { id: 3, name: 'movie3', length: '2h 10m', genres: 'comedies' },
  { id: 4, name: 'movie4', length: '2h 10m', genres: 'comedies' },
  { id: 5, name: 'movie5', length: '2h 10m', genres: 'comedies' },
  { id: 6, name: 'movie6', length: '2h 10m', genres: 'comedies' },
  { id: 7, name: 'movie7', length: '2h 10m', genres: 'comedies' },
  { id: 8, name: 'movie8', length: '2h 10m', genres: 'comedies' },
  { id: 9, name: 'movie9', length: '2h 10m', genres: 'comedies' },
  { id: 10, name: 'movie10', length: '2h 10m', genres: 'comedies' },
  { id: 11, name: 'movie11', length: '2h 10m', genres: 'comedies' },
  { id: 12, name: 'movie12', length: '2h 10m', genres: 'comedies' },
  { id: 13, name: 'movie13', length: '2h 10m', genres: 'comedies' },
  { id: 14, name: 'movie14', length: '2h 10m', genres: 'comedies' },
  { id: 15, name: 'movie15', length: '2h 10m', genres: 'comedies' },
  { id: 16, name: 'movie16', length: '2h 10m', genres: 'comedies' },
  { id: 17, name: 'movie17', length: '2h 10m', genres: 'comedies' },
  { id: 18, name: 'movie18', length: '2h 10m', genres: 'comedies' },
  { id: 19, name: 'movie19', length: '2h 10m', genres: 'comedies' },
  { id: 20, name: 'movie20', length: '2h 10m', genres: 'comedies' },
];

export function TableMovie() {
  const [currentPage, setCurrentPage] = useState(1);
  const movieListPerPage = 10;
  const lastIndex = currentPage * movieListPerPage;
  const firstIndex = lastIndex - movieListPerPage;
  const ListMovie = mockData.slice(firstIndex, lastIndex);
  const page = Math.ceil(mockData.length / movieListPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

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
                        type="button"
                        className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
                      >
                        Add movie
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* bodytable */}
              <tbody>
                {ListMovie.map((item, name) => (
                  <tr
                    key={name}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-400 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center text-white"
                  >
                    <td className="whitespace-nowrap px-6 py-4 ">{item.id}</td>
                    <td className="whitespace-nowrap px-6 py-1 w-40">
                      <div>
                        <img src={img1} className="rounded-lg" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.length}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.genres}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 mt-3 flex justify-center gap-2">
                      <button className="opacity-60 hover:opacity-100">
                        <BinIcon />
                      </button>
                      <button className="opacity-60 hover:opacity-100">
                        <WriteEditIcon />
                      </button>
                      <button className="opacity-60 hover:opacity-100">
                        <MovieIcon />
                      </button>
                      <button className="opacity-60 hover:opacity-100">
                        <FilmIcon />
                      </button>
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
              <Link
                to="#"
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
              </Link>
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
              <Link
                to="#"
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
              </Link>
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
