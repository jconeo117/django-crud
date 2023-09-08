import { useForm } from 'react-hook-form'
import {
  CreateVacancys,
  DeleteVacancys,
  GetVacancy,
  UpdateVacancys,
} from '../api/task.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import toast from 'react-hot-toast'


export const VacancyFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const history = useNavigate() // Obtén la instancia de history
  const params = useParams()

  useEffect(() => {
    async function loadVacancy() {
      if (params.id) {
        const res = await GetVacancy(params.id)
        setValue('name', res.data.name)
        setValue('company_name', res.data.company_name)
        setValue('country', res.data.country)
        setValue('type', res.data.type)
        setValue('salary', res.data.salary)
        setValue('date_published', res.data.date_published)
        setValue('date_apply', res.data.date_apply)
        setValue('vacancy_url', res.data.vacancy_url)
        setValue('contacted', res.data.contacted)
        setValue('interviewed', res.data.interviewed)
      }
    }

    loadVacancy()
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    let res
    if (params.id) {
      res = await UpdateVacancys(params.id, data)
      toast.success("Vacante actualizada con exito!!",{
        position:"bottom-right"
      })
    } else {
      res = await CreateVacancys(data)
      toast.success("Vacante creada con exito!!",{
        position:"bottom-right"
      })
    }
    if (res.status === 201 || res.status === 200) history('/vacancys')
  })

  return (
    <div className='flex justify-center h-auto'>
      <form
        onSubmit={onSubmit}
        className='px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md w-96'
      >
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            Puesto de la Vacante
          </label>
          <input
            type='text'
            placeholder='Puesto de la vacante'
            {...register('name', { required: true })}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <p className='text-xs italic text-red-500'>
              Nombre de la vacante requerido
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            Nombre de la Empresa
          </label>
          <input
            type='text'
            placeholder='Nombre de la Empresa'
            {...register('company_name', { required: true })}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <p className='text-xs italic text-red-500'>
              Nombre de la Empresa requerido
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            País
          </label>
          <input
            type='text'
            placeholder='País de la Vacante'
            {...register('country', { required: true })}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <p className='text-xs italic text-red-500'>
              Nombre de la Empresa requerido
            </p>
          )}
        </div>
        {/* ... otros campos del formulario con estilos similares */}
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            Tipo de Trabajo
          </label>
          <select
            name='type'
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            {...register('type')}
          >
            <option value='0'>Remoto</option>
            <option value='1'>Híbrido</option>
            <option value='2'>Presencial</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            Salario
          </label>
          <input
            type='text'
            placeholder='Salario de la Vacante'
            {...register('salary', { required: true })}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <p className='text-xs italic text-red-500'>
              Salario de la Empresa requerido
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            Fecha de Publicación
          </label>
          <input
            type='date'
            {...register('date_published', { required: true })}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          {errors.date_published && (
            <p className='text-xs italic text-red-500'>
              Fecha de publicación requerida
            </p>
          )}
        </div>
        {params.id && (
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>
              Fecha de aplicacion
            </label>
            <input
              type='date'
              readOnly
              {...register('date_apply')}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            />
          </div>
        )}
        <div className='mb-4'>
          <label className='block mb-2 text-sm font-bold text-gray-700'>
            url de la vacante
          </label>
          <input
            type='text'
            placeholder='url de la Vacante'
            {...register('vacancy_url', { required: true })}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <p className='text-xs italic text-red-500'>
              Salario de la Empresa requerido
            </p>
          )}
        </div>
        {params.id && (
          <div className='grid grid-cols-2 gap-10'>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Contactado
              </label>
              <input
                type='checkbox'
                {...register('contacted')}
                className='mr-2 leading-5'
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Entrevistado
              </label>
              <input
                type='checkbox'
                {...register('interviewed')}
                className='mr-2 leading-tight'
              />
            </div>
          </div>
        )}

        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
          >
            Guardar
          </button>
          {params.id && (
            <button
              type='button'
              className='px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline'
              onClick={() => {
                DeleteVacancys(params.id)
                history('/vacancys')
              }}
            >
              Borrar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
