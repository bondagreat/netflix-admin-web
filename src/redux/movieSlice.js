import { createSlice } from '@reduxjs/toolkit';
import * as movieApi from '../apis/movie-api';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    mood: [],
    genre: [],
    cast: [],
    age: [],
    language: [],
  },
  reducers: {
    getMood: (state, action) => {
      state.mood = action.payload;
    },
    getGenre: (state, action) => {
      state.genre = action.payload;
    },
    getCast: (state, action) => {
      state.cast = action.payload;
    },
    getAge: (state, action) => {
      state.age = action.payload;
    },
    getLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { getMood, getGenre, getCast, getAge, getLanguage } =
  movieSlice.actions;

export default movieSlice.reducer;

export const moodAPI = () => async (dispatch) => {
  try {
    const res = await movieApi.getMood();
    dispatch(getMood(res.data.mood));
  } catch (err) {
    console.log(err);
  }
};

export const genreAPI = () => async (dispatch) => {
  try {
    const res = await movieApi.getGenre();
    dispatch(getGenre(res.data.genre));
  } catch (err) {
    console.log(err);
  }
};

export const castAPI = () => async (dispatch) => {
  try {
    const res = await movieApi.getCast();
    dispatch(getCast(res.data.cast));
  } catch (err) {
    console.log(err);
  }
};

export const ageAPI = () => async (dispatch) => {
  try {
    const res = await movieApi.getAge();
    dispatch(getAge(res.data.age));
  } catch (err) {
    console.log(err);
  }
};

export const languageAPI = () => async (dispatch) => {
  try {
    const res = await movieApi.getLanguage();
    dispatch(getLanguage(res.data.language));
  } catch (err) {
    console.log(err);
  }
};
