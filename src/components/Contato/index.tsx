import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  marcador
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) setNome(nomeOriginal)
    if (emailOriginal.length > 0) setEmail(emailOriginal)
    if (telefoneOriginal.length > 0) setTelefone(telefoneOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Linha>
        <S.Nome
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <S.Tag marcador={marcador}>{marcador}</S.Tag>
      </S.Linha>
      <S.Linha>
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.Telefone
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    email,
                    telefone,
                    marcador
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>

            <S.BotaoCancelarRemover
              onClick={() => {
                cancelarEdicao
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.Linha>
    </S.Card>
  )
}

export default Contato
