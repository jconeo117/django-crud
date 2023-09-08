import axios from 'axios'

// eslint-disable-next-line no-undef
const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://vacancy-management.onrender.com/vacancy/api/v1/vacancys/'
  : 'http://localhost:8000/vacancy/api/v1/vacancys/';

const vacancyApi = axios.create({
  baseURL: baseURL
})

export const GetAllVacancys = () =>vacancyApi.get('/')
export const GetVacancy = (id) =>vacancyApi.get('/'+id)
export const CreateVacancys = (vacancy) =>vacancyApi.post('/', vacancy)
export const UpdateVacancys = (id, vacancy) =>vacancyApi.put(`/${id}/`, vacancy)
export const DeleteVacancys = (id) =>vacancyApi.delete('/'+id)