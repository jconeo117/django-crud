/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export const VacancyCard = ({ vacancy }) => {

  const Navigate = useNavigate()
  return (
    <div key={vacancy.id} className="p-4 m-4 bg-white rounded-lg shadow-md w-72" 
      onClick={()=>{
        Navigate(`/vacancys/${vacancy.id}`)
      }
      
      }>
      <h3 className="text-lg font-semibold text-center text-gray-700">{vacancy.name}</h3>
      <h4 className="text-xs text-center text-gray-500/50">{vacancy.company_name}</h4>
      <hr className="my-2 text-gray-700/50" />
      <p className="text-sm font-medium text-gray-600">
        <span className="mr-2">País:</span>
        {vacancy.country}
      </p>
      <p className="text-sm font-medium text-gray-600">
        <span className="mr-2">Salario:</span>
        ${vacancy.salary}
      </p>
      <p className="text-sm font-medium text-gray-700">
        <span className="mr-2">Tipo de Trabajo:</span>
        {vacancy.type === 0 ? "Remoto" : vacancy.type === 1 ? "Híbrido" : "Presencial"}
      </p>
      <p className="text-sm font-medium text-gray-700">
        <span className="mr-2">Fecha Publicada:</span>
        {vacancy.date_published}
      </p>
      <p className="text-sm font-medium text-gray-700">
        <span className="mr-2">Fecha Aplicación:</span>
        {vacancy.date_apply} 
      </p>
      <p className="text-sm font-medium text-gray-700">
        <span className="mr-2">Contactado:</span>
        {vacancy.contacted ?  "✅" : "❌"}
      </p>
      <p className="text-sm font-medium text-gray-700">
        <span className="mr-2">Entrevistado:</span>
        {vacancy.interviewed ? "✅" : "❌"}
      </p>

      <div className="mt-4 text-center">
        <a
          href={vacancy.vacancy_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ir a la vacante
        </a>
      </div>
    </div>
  );
};
