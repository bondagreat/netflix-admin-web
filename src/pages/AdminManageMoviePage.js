import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import { HomeLogo, SearchIcon } from '../images';
import { TableMovie } from '../components/adminpages/TableMovie';
import { Link } from 'react-router-dom';

export default function AdminManageMoviePage() {
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
              </MenuItemRight>
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
              <Link to="/adminManageAccount" className="text-white mt-2">
                Users
              </Link>
              <Link to="/adminManageMovie" className="text-white mt-2">
                Movies
              </Link>
            </div>
          </div>
          <div className="text-white mt-4">
            <p>Log out</p>
          </div>
        </div>
        <div className="bg-neutral-500 flex flex-grow flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-white mt-2 ml-2">Movies</p>
            <div className=" w-[90%]  overflow-hidden mt-5 m-auto">
              <TableMovie />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
