import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='p-4'>
      <div className='container flex items-center justify-between mx-auto'>
        {/* Logo de la aplicación */}
        <Link to='/' className='text-2xl font-semibold text-white'>
          gestor de vacantes
        </Link>

        {/* Enlaces de navegación */}
        <ul className='flex space-x-4'>
          <li>
            <button className='px-3 py-2 bg-orange-500 rounded-lg'>
              <Link to='/vacancys' className='text-white hover:underline'>
                Lista de Vacantes
              </Link>
            </button>
          </li>
          <li>
            <button className='px-3 py-2 bg-orange-500 rounded-lg'>
              <Link to='/vacancys/form' className='text-white hover:underline'>
                Crear Vacante
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
