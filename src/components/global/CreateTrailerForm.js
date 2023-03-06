import { useNavigate } from 'react-router-dom';

export default function CreateTrailerForm({ show, setClose }) {
  const [source, setSource] = React.useState();
  const navigate = useNavigate();
  const inputRef = React.useRef();

  const handleOnClick = (value) => {
    navigate('/adminCreateMovieSecondPage');
    console.log(value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleSubmitForm = () => {};

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? ' block ' : ' hidden '
        }`}
        // onClick={() => setClose(false)}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <button className="rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 bg-white text-black/60 bold-2 shadow-xl  drop-shadow-xl">
              Step 1
            </button>
            <button className="rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 bg-white text-black/60 bold-2 shadow-xl  drop-shadow-xl">
              Step 2
            </button>
            <button className="rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl">
              Step 3
            </button>
            <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
              <form className="flex-col">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2.5 text-gray-700 text-md font-semibold "
                >
                  Trailer
                </label>
                <div className="flex items-center justify-center w-full">
                  <div className="bg-white w-[400px] h-[280px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center flex-col ">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 ..."
                      viewBox="0 0 24 24"
                    />
                    {source && (
                      <video
                        className="VideoInput_video"
                        alt="Upload"
                        width="100%"
                        // height={height}
                        controls
                        src={source}
                      />
                    )}
                  </div>
                </div>

                <input
                  className="form-control  block    px-1   py-1.5   text-base  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  ref={inputRef}
                  type="file"
                  id="formFile"
                  onChange={handleFileChange}
                />
                {/* <label className="flex flex-row items-center space-x-2 px-5">
                <span className="block text-sm font-medium mb-2 text-gray-900  ">
                  Trailer:
                </span>
                <input
                  className="w-full px-2 py-1 rounded-md border border-slate-400 my-3"
                  type="name"
                />
              </label> */}
                <div className="flex justify-between ">
                  <button
                    type="submit"
                    onClick={handleOnClick}
                    className=" rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
                  >
                    Prev
                  </button>
                  <div className="flex justify-end ">
                    <button
                      type="submit"
                      onClick={handleSubmitForm}
                      className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={handleSubmitForm}
                      className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
