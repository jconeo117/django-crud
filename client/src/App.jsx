import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { VacancyPage } from './pages/vacancyPage'
import { VacancyFormPage } from './pages/vacancyFormPage'
import { Nav } from './components/Nav'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate to={'/vacancys'}/>} />
          <Route path='/vacancys' element={<VacancyPage />} />
          <Route path='/vacancys/form' element={<VacancyFormPage />} />
          <Route path='/vacancys/:id' element={<VacancyFormPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App
