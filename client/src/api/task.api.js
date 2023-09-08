import axios from 'axios'

const vacancyApi = axios.create({
  baseURL: 'http://localhost:8000/vacancy/api/v1/vacancys/'
})
export const GetAllVacancys = () =>vacancyApi.get('/')
export const GetVacancy = (id) =>vacancyApi.get('/'+id)
export const CreateVacancys = (vacancy) =>vacancyApi.post('/', vacancy)
export const UpdateVacancys = (id, vacancy) =>vacancyApi.put(`/${id}/`, vacancy)
export const DeleteVacancys = (id) =>vacancyApi.delete('/'+id)