const Lista = ({ date }: any) => {
  return (
    <li key={date.id} className="bg-white rounded-md shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-2"> {date.nombre} {date.apellido} </h2>
      <h3 className="text-lg font-semibold mb-2"> Edad: {date.edad} </h3>
      <p className="text-gray-700"> Descripción: {date.descripcion} </p>
    </li>
  )
}

export default Lista
