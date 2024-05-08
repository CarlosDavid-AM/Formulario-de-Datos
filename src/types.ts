export interface typeData {
  id: number
  nombre: string
  apellido: string
  edad: number
  descripcion: string
}

export const initialData: typeData = {
  id: Date.now(),
  nombre: '',
  apellido: '',
  edad: 0,
  descripcion: ''
}
