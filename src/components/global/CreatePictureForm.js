import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import useMovie from '../../hooks/useMovie';
import CreateTrailerForm from './CreateTrailerForm';
import CreateVideoForm from './CreateVideoForm';
import * as adminApi from '../../apis/admin-api';
import useLoading from '../../hooks/useLoading';

export default function CreatePictureForm({ show, setClose }) {
  const [step, setStep] = useState(1);
  const stateMood = useSelector((state) => state.movie.mood);
  const stateGenres = useSelector((state) => state.movie.genre);
  const stateCasts = useSelector((state) => state.movie.cast);
  const stateRate = useSelector((state) => state.movie.age);
  const stateLanguage = useSelector((state) => state.movie.language);
  const { startLoading, stopLoading } = useLoading();

  const optionsMood = stateMood.reduce((acc, el, idx) => {
    acc[idx] = {
      value: el.id,
      label: el.name,
    };
    return acc;
  }, []);

  const optionsGenres = stateGenres.reduce((acc, el, idx) => {
    acc[idx] = {
      value: el.id,
      label: el.name,
    };
    return acc;
  }, []);

  const optionsCasts = stateCasts.reduce((acc, el, idx) => {
    acc[idx] = {
      value: el.id,
      label: el.name,
    };
    return acc;
  }, []);

  const optionsRate = stateRate.reduce((acc, el, idx) => {
    acc[idx] = {
      value: el.id,
      label: el.name,
    };
    return acc;
  }, []);

  const optionsLanguage = stateLanguage.reduce((acc, el, idx) => {
    acc[idx] = {
      value: el.id,
      label: el.name,
    };
    return acc;
  }, []);

  const {
    initialInput,
    input,
    setInput,
    genre,
    setGenre,
    mood,
    setMood,
    cast,
    setCast,
    file,
    setFile,
    fileLogo,
    setFileLogo,
    videoInp,
    setVideoInp,
    trailerInp,
    setTrailerInp,
    handleChangeInput,
    handleImage,
    handleLogo,
  } = useMovie();

  const handleNext = () => {
    if (step === 3) {
      setStep(1);
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmitForm = async (e) => {
    try {
      startLoading();
      e.preventDefault();
      input.genre = genre;
      input.mood = mood;
      input.cast = cast;
      const res = await adminApi.addMovie(input);

      const coverData = new FormData();
      coverData.append('input', JSON.stringify(res.data.newMovie.id));
      coverData.append('photo', file);
      await adminApi.addCover(coverData);

      const logoData = new FormData();
      logoData.append('input', JSON.stringify(res.data.newMovie.id));
      logoData.append('photo', fileLogo);
      await adminApi.addLogo(logoData);

      const videoData = new FormData();
      videoData.append('input', JSON.stringify(res.data.newMovie.id));
      videoData.append('video', videoInp);
      await adminApi.addVideo(videoData);

      const trailerData = new FormData();
      trailerData.append('input', JSON.stringify(res.data.newMovie.id));
      trailerData.append('video', trailerInp);
      await adminApi.addTrailer(trailerData);

      setInput(initialInput);
      setGenre([]);
      setMood([]);
      setCast([]);
      setFile(null);
      setFileLogo(null);
      setVideoInp({});
      setTrailerInp({});
      setStep(1);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
      setClose();
    }
  };

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] ${
          show ? ' block ' : ' hidden '
        }`}
      >
        <div className="flex justify-center items-center">
          <div>
            <button
              className={`rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-3  bold-2 shadow-xl  drop-shadow-xl ${
                step === 1
                  ? 'bg-[#E50914] text-white'
                  : 'bg-white text-black/60'
              }`}
            >
              Step 1
            </button>

            <button
              className={`rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-3  bold-2 shadow-xl  drop-shadow-xl ${
                step === 2
                  ? 'bg-[#E50914] text-white'
                  : 'bg-white text-black/60'
              }`}
            >
              Step 2
            </button>
            <button
              className={`rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-3 mr-96 bold-2 shadow-xl  drop-shadow-xl ${
                step === 3
                  ? 'bg-[#E50914] text-white'
                  : 'bg-white text-black/60'
              }`}
            >
              Step 3
            </button>
            <div className="p-8 rounded-lg shadow-lg bg-white w-[850px]  h-[550px] mb-10  relative">
              {step === 1 ? (
                <form>
                  <div className="flex justify-start">
                    <div className="flex-col mr-8">
                      <div className="flex flex-col ">
                        <label
                          htmlFor="formFile"
                          className="form-label inline-block mb-2 text-gray-700 text-md font-medium flex justify-start"
                        >
                          Movie Cover
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <div className="bg-white w-[200px] h-[140px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center text-gray-400 font-light text-sm ">
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
                          onChange={handleImage}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="formFile"
                          className="form-label inline-block mb-2 text-gray-700 text-md font-medium flex justify-start"
                        >
                          Movie Logo
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <div className="bg-white w-[200px] h-[140px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center text-gray-400 font-light text-sm ">
                            <img
                              alt="Click to upload image"
                              width={'200px'}
                              height={'140px'}
                              src={
                                fileLogo ? URL.createObjectURL(fileLogo) : ''
                              }
                            />
                          </div>
                        </div>
                        <input
                          className="form-control block  px-3 py-1.5   text-sm  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          onChange={handleLogo}
                        />
                      </div>
                    </div>
                    <div className="flex-col">
                      <label className="flex flex-row items-center space-x-2">
                        <span className="block text-sm font-medium mb-2 text-gray-900  ">
                          Title:
                        </span>
                        <input
                          name="name"
                          value={input.name}
                          onChange={handleChangeInput}
                          className="w-full h-[36px] pl-3  rounded-md border border-slate-400 my-2 text-gray-900 font-light"
                          type="text"
                        />
                      </label>
                      <label className="flex flex-row items-center space-x-2">
                        <span className=" text-sm font-medium mb-2 text-gray-900 ">
                          Release Date:
                        </span>
                        <input
                          name="release"
                          onChange={handleChangeInput}
                          className="grow h-[36px] pl-3  rounded-md border border-slate-400 mt-1 text-gray-900 font-light"
                          type="text"
                        />
                      </label>
                      <label className="flex flex-row items-center space-x-2">
                        <span className="block text-sm font-medium mb-2 text-gray-900 ">
                          Length:
                        </span>
                        <input
                          name="length"
                          onChange={handleChangeInput}
                          className="w-full pl-3 h-[36px] rounded-md border border-slate-400 mt-3 text-gray-900 font-light"
                          type="text"
                        />
                      </label>
                      <div className="mb-3 xl:w-96">
                        <div className="flex flex-row items-center space-x-2">
                          <span className="block text-sm font-medium mb-2 text-gray-900 ">
                            Mood:
                          </span>
                          <Select
                            isMulti
                            onChange={(e) => setMood(e)}
                            name="colors"
                            className="basic-multi-select w-full px-3 mt-3 rounded-md text-gray-900 font-normal text-sm"
                            classNamePrefix="select"
                            options={optionsMood}
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
                            onChange={(e) => setGenre(e)}
                            name="colors"
                            className="basic-multi-select w-full px-3  rounded-md  text-gray-900 font-normal text-sm"
                            classNamePrefix="select"
                            options={optionsGenres}
                          />
                        </div>
                      </div>
                      <label className="flex flex-row items-center space-x-2">
                        <span className="block text-sm font-medium mb-2 text-gray-900 ">
                          Description:
                        </span>
                        <input
                          name="description"
                          onChange={handleChangeInput}
                          className="w-full h-[36px] pl-3  rounded-md border border-slate-400  mb-1 text-gray-900 font-light"
                          type="text"
                        />
                      </label>

                      <div className="mb-3 xl:w-96">
                        <div className="flex flex-row items-center space-x-2">
                          <span className=" text-sm font-medium mb-2 text-gray-900 ">
                            Rate:
                          </span>
                          <Select
                            name="ageId"
                            id="multiSelection"
                            placeholder="Age"
                            onChange={(e) =>
                              setInput({ ...input, ageId: e.value })
                            }
                            options={optionsRate}
                            className="w-full px-3  rounded-md  mt-2 text-gray-900 font-normal text-sm "
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
                            onChange={(e) => setCast(e)}
                            name="colors"
                            className="basic-multi-select w-full px-3  rounded-md text-gray-900 font-normal text-sm"
                            classNamePrefix="select"
                            options={optionsCasts}
                          />
                        </div>
                      </div>
                      <div className="mb-3 xl:w-96">
                        <div className="flex flex-row items-center space-x-2">
                          <span className=" text-sm font-medium mb-2 text-gray-900 ">
                            Language:
                          </span>
                          <Select
                            name="languageId"
                            id="multiSelection"
                            placeholder="language"
                            onChange={(e) =>
                              setInput({ ...input, languageId: e.value })
                            }
                            options={optionsLanguage}
                            className="w-full px-3  rounded-md  text-gray-900 font-normal text-sm"
                            styles={{
                              control: (styles) => ({
                                ...styles,
                              }),
                            }}
                            // className="w-full px-3  rounded-md border border-slate-400 my-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <></>
              )}
              {step === 2 ? <CreateVideoForm /> : <></>}
              {step === 3 ? <CreateTrailerForm /> : <></>}
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="absolute left-10 bottom-4  rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
                >
                  Prev
                </button>
              ) : (
                <></>
              )}

              {step === 3 ? (
                <div className="absolute right-10 bottom-4 flex justify-end ">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setClose();
                    }}
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
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-10 bottom-4 rounded-md px-6 pt-2.5 pb-2 text-sm font-medium   bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl "
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
