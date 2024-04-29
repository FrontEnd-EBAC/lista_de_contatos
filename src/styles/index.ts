import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../styles/variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    boxisizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    max-width: 1920px;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 128px auto;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.azulEscuro};
  border-color: ${variaveis.cinza};
  width: 90%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 16px;
  max-height: 24px;
  width: 100px;
  max-width: 80px;
  min-width: 80px;
`

export default EstiloGlobal
