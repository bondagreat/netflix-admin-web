import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockData = [
  { id: 1, name: 'user1', email: 'a@gmail.com', status: 'Active' },
  { id: 2, name: 'user2', email: 'b@gmail.com', status: 'Active' },
  { id: 3, name: 'user3', email: 'c@gmail.com', status: 'Active' },
  { id: 4, name: 'user4', email: 'd@gmail.com', status: 'Active' },
  { id: 5, name: 'user5', email: 'e@gmail.com', status: 'Active' },
  { id: 6, name: 'user6', email: 'f@gmail.com', status: 'Active' },
  { id: 7, name: 'user7', email: 'g@gmail.com', status: 'Active' },
  { id: 8, name: 'user8', email: 'h@gmail.com', status: 'Active' },
  { id: 9, name: 'user9', email: 'i@gmail.com', status: 'Active' },
  { id: 10, name: 'user10', email: 'j@gmail.com', status: 'Active' },
  { id: 11, name: 'user11', email: 'k@gmail.com', status: 'Active' },
];

export function TableAccount() {
  const [currentPage, setCurrentPage] = useState(1);
  const accountListPerPage = 10;
  const lastIndex = currentPage * accountListPerPage;
  const firstIndex = lastIndex - accountListPerPage;
  const ListAccount = mockData.slice(firstIndex, lastIndex);
  const page = Math.ceil(mockData.length / accountListPerPage);
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
                  <th scope="col" className="px-6 py-4 w-52">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-4 w-96">
                    E-mail
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>

              {/* bodytable */}
              <tbody>
                {ListAccount.map((item, b) => (
                  <tr
                    key={b}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-400 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center text-white"
                  >
                    <td className="whitespace-nowrap px-6 py-4 ">{item.id}</td>
                    <td className="whitespace-nowrap px-6 py-1 w-40">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.status}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex justify-center space-x-2">
                        <button
                          type="button"
                          className="inline-block rounded bg-red-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
                        >
                          Block
                        </button>
                        <Link
                          to="/adminSeeTransaction"
                          type="button"
                          className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
                        >
                          Transaction
                        </Link>
                      </div>
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
