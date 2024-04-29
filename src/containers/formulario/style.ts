import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Formulary = styled.form`
  max-widht: 540px;
  width: 50vh;
  font-weight: bold;
  font-size: 14;
  color: ${variaveis.cinzaEscuro};

  input {
    resize: none;
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 4px;
    margin-left: 6px;
    font-size: 14px;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  margin-left: 8px;

  label {
    margin-right: 6px;
  }
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 20px;
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
