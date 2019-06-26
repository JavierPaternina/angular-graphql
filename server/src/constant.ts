import dotenv from 'dotenv';
dotenv.config({ path: ".env" });
export const API_KEY = process.env.API_KEY;
export const BASE_MOVIE_URL = process.env.BASE_MOVIE_URL;
export const BASE_SHOWS_URL = process.env.BASE_SHOWS_URL;