import * as enums from '../utils/enums/Marcador'

class Contato {
  id: number
  nome: string
  email: string
  telefone: string
  marcador: enums.Marcador

  constructor(
    id: number,
    nome: string,
    email: string,
    telefone: string,
    marcador: enums.Marcador
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.marcador = marcador
  }
}

export default Contato
