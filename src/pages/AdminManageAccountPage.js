import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import { HomeLogo, SearchIcon } from '../images';
import { useEffect, useState } from 'react';
import UserList from '../components/adminpages/UserList';
import * as adminApi from '../apis/admin-api';
import SearchForm from '../components/adminpages/SearchForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

export default function AdminManageAccountPage() {
  const [users, setUsers] = useState([]);
  const [showUser, setShowUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const accountListPerPage = 8;
  const lastIndex = currentPage * accountListPerPage;
  const firstIndex = lastIndex - accountListPerPage;
  const ListAccount = showUser.slice(firstIndex, lastIndex);
  const page = Math.ceil(showUser.length / accountListPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);
  const params = new URLSearchParams(window.location.search);
  console.log(params.get('back'));

  const updateShowUser = (searchUser) => {
    const userTemp = users.filter((el) => {
      if (!searchUser) {
        return null;
      }
      return el.email.toLowerCase().includes(searchUser?.toLowerCase());
    });
    setShowUser(userTemp);
    sessionStorage.setItem('searchUser', JSON.stringify(userTemp));
  };

  const fetchUser = async () => {
    const res = await adminApi.getAllUser();
    setUsers(res.data.user);
  };
  useEffect(() => {
    fetchUser();
    const userTemp = sessionStorage.getItem('searchUser');
    console.log(JSON.parse(userTemp));
    if (params.get('back')) {
      setShowUser(JSON.parse(userTemp));
    }
  }, []);

  return (
    <>
      <div>
        <div className=" top-0 left-0 right-0 bg-black h-[100px] ">
          <div className="flex justify-center">
            <div className=" h-[70px] w-full flex">
              <Brand />
            </div>
            <div className=" h-[100px]  w-full ">
              <div className="flex items-center flex-row justify-end gap-3 mr-10 mt-8">
                <MenuItemRight>
                  <SearchIcon />
                  <SearchForm updateShowUser={updateShowUser} />
                </MenuItemRight>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  w-screen h-screen">
          <div className="pt-10 w-[230px] pl-5 bg-zinc-800">
            <div>
              <div className="flex flex-row gap-3">
                <div className="fill-white ">
                  <HomeLogo />
                </div>
                <Link to="#">
                  <p className="text-white mt-2">Home</p>
                </Link>
              </div>
              <div className="pl-11">
                <Link to="/adminManageAccount">
                  <p className="text-white mt-2">Users</p>
                </Link>
                <Link to="/adminManageMovie">
                  <p className="text-white mt-2">Movies</p>
                </Link>
              </div>
            </div>
            <button
              onClick={() => dispatch(logout())}
              className="text-white mt-4"
            >
              <p>Log out</p>
            </button>
          </div>
          <div className="bg-neutral-500 flex flex-grow flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-white mt-2 ml-2">Users</p>
            </div>
            <div className="flex flex-col mt-10">
              <div>
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className=" bg-neutral-500 font-medium ">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Id
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Username
                          </th>
                          <th scope="col" className="px-6 py-4">
                            E-mail
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-4"></th>
                          <th scope="col" className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      {ListAccount?.map((el) => (
                        <UserList
                          key={el.id}
                          user={el}
                          ListAccount={ListAccount}
                          userTransaction={el.Transactions}
                        />
                      ))}
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-14">
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
            </div>
          </div>
        </div>
      </div>
    </>
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
