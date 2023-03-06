import { HomeLogo, SearchIcon } from '../../images';
import Brand from '../../layouts/Brand';
import MenuItemRight from '../../layouts/MenuItemRight';
import ModalEditPicture from '../../components/global/ModalEditPicture';

export default function AdminEditMoviePage() {
  return (
    <>
      <div>
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
                <div className="fill-white ">
                  <HomeLogo />
                </div>
                <p className="text-white mt-2">Home</p>
              </div>
              <div className="pl-11">
                <p className="text-white mt-2">Users</p>
                <p className="text-white mt-2">Movies</p>
              </div>
            </div>
            <div className="text-white mt-4">
              <p>Log out</p>
            </div>
          </div>
          <div className="bg-neutral-500 flex flex-grow flex-col">
            <p className="text-white mt-2 ml-2">Movies</p>
          </div>
          <ModalEditPicture />
        </div>
      </div>
    </>
  );
}
