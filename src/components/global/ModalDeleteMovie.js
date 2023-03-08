export default function ModalDeleteVideo({ show, setClose, handleDelete }) {
  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? ' block ' : ' hidden '
        }`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
            <form className="flex-col">
              <label
                // htmlFor="formFile"
                className="form-label inline-block  text-gray-700 font-semibold text-xl mb-2"
              >
                Are you sure you want to delete this movie?
              </label>
              <div className="flex items-center justify-center w-full">
                <div className="bg-white w-[350px]  flex justify-center items-center ">
                  <div className="flex justify-end  ">
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={setClose}
                      className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
