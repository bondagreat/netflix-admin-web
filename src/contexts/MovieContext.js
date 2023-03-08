import { createContext, useState } from 'react';

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
  const [input, setInput] = useState(initialInput);
  const [genre, setGenre] = useState([]);
  const [mood, setMood] = useState([]);
  const [cast, setCast] = useState([]);
  const [file, setFile] = useState(null);
  const [fileLogo, setFileLogo] = useState(null);
  const [videoInp, setVideoInp] = useState({});
  const [trailerInp, setTrailerInp] = useState({});

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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
