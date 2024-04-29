import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    if (termo != undefined) {
      let contatosFiltrados = itens

      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'marcador') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.marcador === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((t) => (
          <li key={t.id}>
            <Contato
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
              marcador={t.marcador}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
