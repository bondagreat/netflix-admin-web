import React, { useState } from 'react';
import Select from 'react-select';

export default function ModalEditPicture({ show, setClose }) {
  const optionsEditMood = [
    { value: '1', label: 'Adventure' },
    { value: '2', label: 'Comedies' },
    { value: '3', label: 'Drama' },
    { value: '4', label: 'Exiciting' },
    { value: '5', label: 'Horror' },
    { value: '6', label: 'Quirky' },
    { value: '7', label: 'Romantic' },
    { value: '8', label: 'Swoonworthy' },
  ];
  const optionsEditGenres = [
    { value: '1', label: 'Action' },
    { value: '2', label: 'Adventure' },
    { value: '3', label: 'Comedies' },
    { value: '4', label: 'Horror' },
    { value: '5', label: 'Hollywood' },
    { value: '6', label: 'QuiKids&Familyrky' },
    { value: '7', label: 'K-Dramas' },
    { value: '8', label: 'Romance' },
    { value: '9', label: 'Variety' },
  ];
  const optionsEditCasts = [
    { value: '1', label: 'Jack' },
    { value: '2', label: 'Jill' },
    { value: '3', label: 'jimmy' },
    { value: '4', label: 'John' },
  ];
  const optionsEditRate = [
    { value: '1', label: '7+' },
    { value: '2', label: '13+' },
    { value: '3', label: '16+' },
    { value: '4', label: '18+' },
  ];
  const optionsEditLanguage = [{ value: '1', label: 'English' }];
  const [fileLogo, setFileLogo] = useState(null);

  const handleOnChange = (value) => {
    console.log(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  const handlePreviewImage = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState(null);

  const handlePreviewImageLogo = (e) => {
    setFileLogo(e.target.files[0]);
  };

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)]${
          show ? ' block ' : ' hidden '
        }`}
      >
        <div className="flex justify-center items-center">
          <div className="p-8 rounded-lg shadow-lg bg-white w-[790px]  h-[560px] my-10 ">
            <form>
              <div className="flex justify-start">
                <div className="flex-col mr-8">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700 text-md"
                    >
                      Movie Cover
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <div className="bg-white w-[200px] h-[140px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center ">
                        <img
                          alt="Click to upload image"
                          width={'200px'}
                          height={'140px'}
                          src={file ? URL.createObjectURL(file) : ''}
                        />
                      </div>
                    </div>
                    <input
                      className="form-control block  px-3 py-1.5   text-sm  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      id="formFile"
                      name="ImageStyle"
                      onChange={handlePreviewImage}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700 text-md"
                    >
                      Movie Logo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <div className="bg-white w-[200px] h-[140px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center ">
                        <img
                          alt="Click to upload image"
                          width={'200px'}
                          height={'140px'}
                          src={fileLogo ? URL.createObjectURL(fileLogo) : ''}
                        />
                      </div>
                    </div>
                    <input
                      className="form-control block  px-3 py-1.5   text-sm  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      id="formFile"
                      onClick={handlePreviewImageLogo}
                    />
                  </div>
                </div>
                <div className="flex-col">
                  <label className="flex flex-row items-center space-x-2">
                    <span className="block text-sm font-medium mb-2 text-gray-900  ">
                      Title:
                    </span>
                    <input
                      className="w-full h-[36px] pl-3  rounded-md border border-slate-400 my-2 text-gray-900"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <span className=" text-sm font-medium mb-2 text-gray-900 ">
                      Release Date:
                    </span>
                    <input
                      className="grow h-[36px] pl-3  rounded-md border border-slate-400 mt-1 text-gray-900"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <span className="block text-sm font-medium mb-2 text-gray-900 ">
                      Length:
                    </span>
                    <input
                      className="w-full pl-3 h-[36px] rounded-md border border-slate-400 mt-3 text-gray-900"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <span className="block text-sm font-medium mb-2 text-gray-900 ">
                      Description:
                    </span>
                    <input
                      className="w-full h-[36px] pl-3  rounded-md border border-slate-400 mt-3 mb-1 text-gray-900"
                      type="name"
                    />
                  </label>
                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className=" text-sm font-medium mb-2 text-gray-900 ">
                        Rate:
                      </span>
                      <Select
                        id="multiSelection"
                        placeholder="Age"
                        onChange={handleOnChange}
                        options={optionsEditRate}
                        className="w-full px-3  rounded-md  mt-2 text-gray-900 "
                      />
                    </div>
                  </div>
                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className=" text-sm font-medium mb-2 text-gray-900 ">
                        Language:
                      </span>
                      <Select
                        id="multiSelection"
                        placeholder="language"
                        onChange={handleOnChange}
                        options={optionsEditLanguage}
                        className="w-full px-3  rounded-md text-gray-900"
                        styles={{
                          control: (styles) => ({
                            ...styles,
                          }),
                        }}
                        // className="w-full px-3  rounded-md border border-slate-400 my-3"
                      />
                    </div>
                  </div>

                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className="text-sm font-medium  text-gray-900">
                        Casts:
                      </span>
                      <Select
                        isMulti
                        onChange={handleOnChange}
                        name="colors"
                        className="basic-multi-select w-full px-3  rounded-md  text-gray-900"
                        classNamePrefix="select"
                        options={optionsEditCasts}
                      />
                    </div>
                  </div>
                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className="block text-sm font-medium mb-2 text-gray-900 ">
                        Genres:
                      </span>
                      <Select
                        isMulti
                        onChange={handleOnChange}
                        name="colors"
                        className="basic-multi-select w-full px-3  rounded-md text-gray-900 "
                        classNamePrefix="select"
                        options={optionsEditGenres}
                      />
                    </div>
                  </div>

                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className="block text-sm font-medium mb-2 text-gray-900 ">
                        Mood:
                      </span>
                      <Select
                        isMulti
                        onChange={handleOnChange}
                        name="colors"
                        className="basic-multi-select w-full px-3  rounded-md text-gray-900 "
                        classNamePrefix="select"
                        options={optionsEditMood}
                      />
                    </div>
                  </div>
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
