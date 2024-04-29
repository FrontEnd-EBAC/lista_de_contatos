import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.cinzaClaro};
  height: 100vh;
  width: 100%;
`

export const Filtros = styled.div`
  display: block;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.vermelho};
  border-color: ${variaveis.cinzaEscuro};
  width: 87%;
`
