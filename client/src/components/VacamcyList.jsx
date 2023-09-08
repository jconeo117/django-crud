import { GetAllVacancys } from '../api/task.api'
import { useEffect, useState } from 'react'
import { VacancyCard } from './VacancyCard'

export const VacamcyList = () => {
  const [vacantes, setVacantes] = useState([])

  useEffect(() => {
    async function LoadVacancys() {
      const res = await GetAllVacancys()
      setVacantes(res.data)
    }
    LoadVacancys()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-5'>
      {vacantes.map((vacancy) => (
        <VacancyCard key={vacancy.id} vacancy={vacancy}/>
      ))}
    </div>
  );
  
}
