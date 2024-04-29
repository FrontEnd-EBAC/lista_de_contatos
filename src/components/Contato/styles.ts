import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Marcador'
import { Botao } from '../../styles'

type TagProps = {
  marcador?: enums.Marcador
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.marcador === enums.Marcador.AMIGOS) return variaveis.verdeClaro
  if (props.marcador === enums.Marcador.ESCOLA) return variaveis.azulClaro
  if (props.marcador === enums.Marcador.FAMILIA) return variaveis.lilas
  if (props.marcador === enums.Marcador.TRABALHO) return variaveis.amarelo

  return variaveis.laranja
}

export const Card = styled.div`
  background-color: ${variaveis.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 12px;
  margin-top: 12px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Linha = styled.div`
  display: flex;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-left: 16px;
  margin-bottom: 16px;
  width: 100%;
  max-width: 162px;
  min-width: 162px;
  max-height: 16px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  color: ${variaveis.cinzaEscuro};
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 4px;
`

export const Nome = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 24px;
  display: block;
  resize: none;
  border: none;
`

export const Email = styled.textarea`
  color: ${variaveis.cinzaEscuro};
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;

  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 24px;
  display: block;
  resize: none;
  border: none;
`
export const Telefone = styled.textarea`
  color: ${variaveis.cinzaEscuro};
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  max-width: 120px;
  line-height: 24px;
  display: block;
  resize: none;
  border: none;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.preto};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verdeEscuro};
  padding: 4px 8px;
  height: 48px;
`
export const BotaoVoltar = styled(Botao)`
  background-color: ${variaveis.cinzaEscuro};
  padding: 4px 8px;
  max-width: 128px;
  height: 48px;
`
