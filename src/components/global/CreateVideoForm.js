import React, { useEffect, useRef, useState } from 'react';
import useMovie from '../../hooks/useMovie';

export default function CreateVideoForm(props, { show, setClose }) {
  // const navigate = useNavigate();
  // const handleOnClick = (value) => {
  //   navigate('/adminCreateMovieThirdPage');
  //   console.log(value);
  // };
  const { width, height } = props;
  const inputRef = useRef();
  const { setVideoInp } = useMovie();

  const [video, setVideo] = useState(null);
  // const [videoInp, setVideoInp] = useState({});

  const handleVideo = (e) => {
    const file = e.target.files[0];
    setVideoInp(file);
    const url = URL.createObjectURL(file);
    setVideo(url);
  };
  const videoRef = useRef();

  // const handleChoose = (event) => {
  //   inputRef.current.click();
  // };
  return (
    <>
      {/* <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? ' block ' : ' hidden '
        }`} */}

      {/* > */}
      <div className="w-full h-full flex justify-center items-center">
        {/* <div>
          <button className="rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 bg-white text-black/60 bold-2 shadow-xl  drop-shadow-xl">
            Step 1
          </button>
          <button className="rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl">
            Step 2
          </button>
          <button className="rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 bg-white text-black/60 bold-2 shadow-xl  drop-shadow-xl">
            Step 3
          </button> */}
        {/* <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511]  "> */}
        <form className="flex-col">
          <label
            htmlFor="formFile"
            className="form-label inline-block mb-2.5 text-gray-700 text-md font-semibold "
          >
            Video
          </label>
          <div className="flex items-center justify-center w-full">
            {/* <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden w-full"
                    />
                  </label> */}
            <div className="bg-white w-[400px] h-[280px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center  flex-col ">
              {/* {!video && (
                      <button onClick={handleChoose}>Upload to video</button>
                    )} */}
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              />

              {video && (
                <video
                  className="VideoInput_video"
                  ref={videoRef}
                  width="100%"
                  height={height}
                  controls
                  src={video}
                />
              )}
            </div>
          </div>
          <input
            className="form-control  block   px-1   py-1.5   text-base  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            ref={inputRef}
            type="file"
            id="formFile"
            accept=".mov,.mp4"
            onChange={handleVideo}
          />
          <div className="flex justify-between">
            {/* <button
              type="submit"
              className=" rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
            >
              Prev
            </button> */}
            {/* <button
              type="submit"
              onClick={handleOnClick}
              className=" rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
            >
              Next
            </button> */}
          </div>
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
}
