import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Marcador'
import { alterarTermo } from '../../store/reducers/filtro'
import { BotaoVoltar } from '../../components/Contato/styles'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Marcador.AMIGOS}
                legenda={enums.Marcador.AMIGOS}
                criterio="marcador"
              />
              <FiltroCard
                valor={enums.Marcador.ESCOLA}
                legenda={enums.Marcador.ESCOLA}
                criterio="marcador"
              />
              <FiltroCard
                valor={enums.Marcador.FAMILIA}
                legenda={enums.Marcador.FAMILIA}
                criterio="marcador"
              />
              <FiltroCard
                valor={enums.Marcador.TRABALHO}
                legenda={enums.Marcador.TRABALHO}
                criterio="marcador"
              />
              <FiltroCard legenda="todos" criterio="todos" />
              <ul>
                <li>{termo}</li>
              </ul>
            </S.Filtros>
          </>
        ) : (
          <BotaoVoltar onClick={() => navigate('/')}>Voltar</BotaoVoltar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
