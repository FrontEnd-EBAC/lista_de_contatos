import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Titulo, Campo } from '../../styles'
import { BotaoSalvar } from '../../components/Contato/styles'
import { Formulary, Opcoes, Opcao } from './style'

import * as enums from '../../utils/enums/Marcador'
import { cadastrar } from '../../store/reducers/contatos'

const Form = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [marcador, setMarcador] = useState(enums.Marcador.TRABALHO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        marcador
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Formulary onSubmit={cadastrarContato}>
        <Titulo>Nome</Titulo>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />

        <Titulo>E-mail</Titulo>
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="mail"
          placeholder="e-mail"
        />

        <Titulo>Telefone</Titulo>
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />

        <Opcoes>
          <Titulo>Marcador</Titulo>
          {Object.values(enums.Marcador).map((marcador) => (
            <Opcao key={marcador}>
              <input
                value={marcador}
                name="marcador"
                type="radio"
                id={marcador}
                defaultChecked={marcador === enums.Marcador.TRABALHO}
                onChange={(evento) =>
                  setMarcador(evento.target.value as enums.Marcador)
                }
              />{' '}
              <label htmlFor={marcador}>{marcador}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Formulary>
    </MainContainer>
  )
}
export default Form
