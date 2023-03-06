import { useState } from 'react';

import { Link } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    transactionId: 'T001',
    packageId: 'P01',
    startDate: '21-11-2022',
    endDate: '09-03-2023',
  },
  {
    id: 1,
    transactionId: 'T002',
    packageId: 'P02',
    startDate: '21-11-2022',
    endDate: '09-03-2023',
  },
  {
    id: 1,
    transactionId: 'T003',
    packageId: 'P03',
    startDate: '21-11-2022',
    endDate: '09-03-2023',
  },
];

export function TableTransaction() {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionListPerPage = 10;
  const lastIndex = currentPage * transactionListPerPage;
  const firstIndex = lastIndex - transactionListPerPage;
  const ListTransaction = mockData.slice(firstIndex, lastIndex);
  const page = Math.ceil(mockData.length / transactionListPerPage);
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
                  <th scope="col" className="px-6 py-4 w-36">
                    User ID
                  </th>
                  <th scope="col" className="px-6 py-4 w-56">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-4 w-52">
                    Package ID
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Start date
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    End date
                  </th>
                </tr>
              </thead>

              {/* bodytable */}
              <tbody>
                {ListTransaction.map((item, name) => (
                  <tr
                    key={name}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-400 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center text-white"
                  >
                    <td className="whitespace-nowrap px-6 py-4 ">{item.id}</td>
                    <td className="whitespace-nowrap px-6 py-1 w-40">
                      {item.transactionId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.packageId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.startDate}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.endDate}
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
