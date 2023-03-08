import { useState } from 'react';
import { BinIcon, FilmIcon, MovieIcon, WriteEditIcon } from '../../images';
import ModalDeleteVideo from '../global/ModalDeleteMovie';
import ModalEditPicture from '../global/ModalEditPicture';
import ModalEditTrailer from '../global/ModalEditTrailer';
import ModalEditVideo from '../global/ModalEditVideo';
import * as adminApi from '../../apis/admin-api';
import useMovie from '../../hooks/useMovie';

export default function MovieList({ id, cover, name, el }) {
  const [openPicture, setOpenPicture] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [openTrailer, setOpenTrailer] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const { fetchMovie, setSearchMovie } = useMovie();

  const handleOpenPicture = () => {
    setOpenPicture(true);
  };
  const handleClosePicture = () => {
    setOpenPicture(false);
  };
  const handleOpenVideo = () => {
    setOpenVideo(true);
  };
  const handleCloseVideo = () => {
    setOpenVideo(false);
  };
  const handleOpenTrailer = () => {
    setOpenTrailer(true);
  };
  const handleCloseTrailer = () => {
    setOpenTrailer(false);
  };
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleDelete = async () => {
    await adminApi.deleteMovie(id);
    await adminApi.getAllMovie();
    fetchMovie();
    setOpenDelete(false);
  };

  console.log(el);

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-400 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center text-white">
      <td className="whitespace-nowrap px-6 py-4 ">{id}</td>
      <td className="whitespace-nowrap px-6 py-1 w-40">
        <img src={cover} className="rounded-lg" />
      </td>
      <td className="whitespace-nowrap px-6 py-4">{name}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {el.length.split('.')[0] + 'h' + ' ' + el.length.split('.')[1] + 'm'}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {el?.MovieGenres?.[0]?.Genre?.name}
      </td>
      <td className="whitespace-nowrap px-6 py-4 mt-3 flex justify-center gap-2">
        <button
          onClick={handleOpenDelete}
          className="opacity-60 hover:opacity-100"
        >
          <BinIcon />
        </button>
        <ModalDeleteVideo
          show={openDelete}
          setClose={handleCloseDelete}
          handleDelete={handleDelete}
        />

        <button
          id="picture"
          type="button"
          className="opacity-60 hover:opacity-100"
          onClick={handleOpenPicture}
        >
          <WriteEditIcon />
        </button>
        <ModalEditPicture
          cover={el.cover}
          logo={el.logo}
          name={el.name}
          release={el.release}
          length={el.length}
          description={el.description}
          movieCast={el.MovieCasts}
          movieGenre={el.MovieGenre}
          movieMood={el.MovieMood}
          show={openPicture}
          setClose={handleClosePicture}
        />
        <button
          id="video"
          type="button"
          className="opacity-60 hover:opacity-100"
          onClick={handleOpenVideo}
        >
          <MovieIcon />
        </button>
        <ModalEditVideo
          video={el.movie}
          show={openVideo}
          setClose={handleCloseVideo}
        />
        <button
          id="trailer"
          type="button"
          className="opacity-60 hover:opacity-100"
          onClick={handleOpenTrailer}
        >
          <FilmIcon />
        </button>
        <ModalEditTrailer
          trailer={el.trailer}
          show={openTrailer}
          setClose={handleCloseTrailer}
        />
      </td>
    </tr>
  );
}
