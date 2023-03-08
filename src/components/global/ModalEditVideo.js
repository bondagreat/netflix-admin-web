import React, { useState } from 'react';

export default function ModalEditVideo({ show, setClose, video }) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  // const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? ' block ' : ' hidden '
        }`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511]  ">
            <form className="flex-col">
              <label
                htmlFor="formFile"
                className="form-label inline-block mb-2 text-gray-700 font-semibold text-xl mb-2.5"
              >
                Video
              </label>
              <div className="flex items-center justify-center w-full">
                <div className="bg-white w-[400px] h-[280px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center  flex-col ">
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
              <div className="flex justify-end ">
                <button
                  type="button"
                  onClick={setClose}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
