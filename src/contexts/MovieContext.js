import { createContext, useState } from 'react';
import * as adminApi from '../apis/admin-api';

export const MovieContext = createContext();

const initialInput = {
  name: '',
  release: '',
  length: '',
  description: '',
  ageId: '',
  languageId: '',
};

export default function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState(null);

  const [input, setInput] = useState(initialInput);
  const [genre, setGenre] = useState([]);
  const [mood, setMood] = useState([]);
  const [cast, setCast] = useState([]);
  const [file, setFile] = useState(null);
  const [fileLogo, setFileLogo] = useState(null);
  const [videoInp, setVideoInp] = useState({});
  const [trailerInp, setTrailerInp] = useState({});

  const [editInput, setEditInput] = useState();
  const [editCover, setEditCover] = useState();
  const [editLogo, setEditLogo] = useState();
  const [editVideo, setEditVideo] = useState();
  const [editTrailer, setEditTrailer] = useState();

  const fetchMovie = async () => {
    const res = await adminApi.getAllMovie();
    setMovies(res.data.movie);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLogo = (e) => {
    setFileLogo(e.target.files[0]);
  };

  return (
    <MovieContext.Provider
      value={{
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
        movies,
        fetchMovie,
        searchMovie,
        setSearchMovie,
        // editInput, setEditInput,
        // editCover, setEditCover,
        // editLogo, setEditLogo,
        // editVideo, setEditVideo,
        // editTrailer, setEditTrailer,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
