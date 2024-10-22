import axiosInstance from '@/app/api/axios.config';

export const api = {
  getHeroes: (page: number) => axiosInstance.get(`/people?page=${page}`),
  getHeroDetails: (id: number) => axiosInstance.get(`/people/${id}`),
  getFilms: (ids: number[]) =>
    Promise.all(ids.map((id) => axiosInstance.get(`/films/${id}`))),
  getStarships: (ids: number[]) =>
    Promise.all(ids.map((id) => axiosInstance.get(`/starships/${id}`))),
};
