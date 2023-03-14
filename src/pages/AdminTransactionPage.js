import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import { HomeLogo } from '../images';
import { TableTransaction } from '../components/adminpages/TableTransaction';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AdminSeeTransactionPage() {
  const location = useLocation();
  const transaction = location.state.userTransaction;

  useEffect(() => {
    return () => {
      window.history.replaceState({}, document.title);
    };
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
              <MenuItemRight></MenuItemRight>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  w-screen h-screen">
        <div className="pt-10 w-[230px] pl-5 bg-zinc-800">
          <div>
            <div className="flex flex-row gap-3">
              <Link to="#" className="fill-white ">
                <HomeLogo />
              </Link>
              <Link to="#" className="text-white mt-2">
                Home
              </Link>
            </div>
            <div className="pl-11 flex flex-col">
              <Link to="/admin/manageAccount" className="text-white mt-2">
                Users
              </Link>
              <Link to="/admin/manageMovie" className="text-white mt-2">
                Movies
              </Link>
            </div>
          </div>
          <div className="text-white mt-4">
            <button>Log out</button>
          </div>
        </div>
        <div className="bg-neutral-500 flex flex-grow flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-white mt-2 ml-2">Transactions</p>
            <Link
              to="/admin/manageAccount?back=true"
              className="text-white border-1 mt-2 mr-2 bg-neutral-700 hover:bg-neutral-800 focus:ring-1 ring-white px-7 rounded-lg"
            >
              Back
            </Link>
          </div>
          <div className=" w-[90%]  overflow-hidden mt-5 m-auto">
            <TableTransaction transaction={transaction} />
          </div>
        </div>
      </div>
    </>
  );
}
