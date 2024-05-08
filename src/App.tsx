import { useState } from 'react'
import { initialData, type typeData } from './types'
import Lista from './components/Lista'

type htmlInput = HTMLInputElement | HTMLTextAreaElement

const App = () => {
  const [datos, setDatos] = useState<typeData[]>([])
  const [formDatos, setFormDatos] = useState<typeData>(initialData)

  const handleChange = (e: React.ChangeEvent<htmlInput>) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value
    })
  }

  const verifyInputs = formDatos.nombre.trim() !== '' &&
  formDatos.apellido.trim() !== '' &&
  formDatos.edad !== 0 &&
  formDatos.descripcion.trim() !== ''

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!verifyInputs) {
      alert('Por favor completa todos los campos.')
      return
    }

    const newDatos: typeData = {
      id: Date.now(),
      nombre: formDatos.nombre,
      apellido: formDatos.apellido,
      edad: formDatos.edad,
      descripcion: formDatos.descripcion
    }

    setDatos([...datos, newDatos])
    setFormDatos(initialData)
  }

  const eliminaDato = (id: any) => {
    const eliminar = datos.filter(datoID => datoID.id !== id)
    setDatos(eliminar)
  }

  return (
    <div className='flex flex-col justify-center p-4 bg-gray-600 rounded-md shadow-md gap-y-9 mx-auto w-1/2 mt-10'>
      <h1 className='text-center text-white text-2xl font-semibold '>
        Formulario de Datos
      </h1>
      <form className='flex flex-col'>
        <input type='text' name='nombre' placeholder='Nombre'
        onChange={handleChange} value={formDatos.nombre} className='mb-2 p-2 border rounded-md' />
        <br />
        <input type='text' name='apellido' placeholder='Apellido' onChange={handleChange}
        value={formDatos.apellido} className='mb-2 p-2 border rounded-md' />
        <br />
        <input type='number' name='edad' placeholder='Edad' onChange={handleChange}
        value={formDatos.edad} className='mb-2 p-2 border rounded-md' />
        <br />
        <textarea name="descripcion" onChange={handleChange} value={formDatos.descripcion} placeholder='Descripción' className="mb-2 p-2 border rounded-md h-32" />

        <br />
        <button onClick={handleClick} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold'>
          Enviar
        </button>
      </form>

      <ul>
        {datos.map((data) => (
          <Lista date={data} key={data.id} click={() => { eliminaDato(data.id) }} />
        ))}
      </ul>
    </div>

  )
}

export default App
