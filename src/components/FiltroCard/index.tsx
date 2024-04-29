import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Marcador'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'marcador' | 'todos'
  valor?: enums.Marcador
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }
  const contarTarefas = () => {
    if (criterio === 'todos') return contatos.itens.length

    if (criterio === 'marcador') {
      return contatos.itens.filter((item) => item.marcador === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()

  const contador = contarTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
