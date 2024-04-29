import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const NovoContato = styled(Link)`
  display: flex;
  height: 64px;
  width: 120px;
  bottom: 20px;
  left: 20px;

  color: ${variaveis.preto};
  background-color: ${variaveis.branco};
  border-color: ${variaveis.verdeEscuro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-style: solid;
  border-radius: 6px;

  position: fixed;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`
