import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type PropsSemlegendaEContador = Omit<Props, 'legenda' | 'contador' | 'criterio'>

type Props = {
  ativo?: boolean
}

export const Card = styled.div<PropsSemlegendaEContador>`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;

  border: 1px solid
    ${(props) =>
      props.ativo ? `${variaveis.laranja}` : `${variaveis.cinzaEscuro}`};

  background-color: ${(props) =>
    props.ativo ? `${variaveis.amarelo}` : `${variaveis.cinza}`};

  color: ${(props) =>
    props.ativo ? `${variaveis.vermelho}` : `${variaveis.azulEscuro}`};
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
