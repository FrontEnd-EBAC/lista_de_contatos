import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Marcador'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Carlos Sainz Vázquez de Castro',
      email: 'carlos.sainz@f1.com',
      telefone: '+34 98765-4321',
      marcador: enums.Marcador.TRABALHO
    },
    {
      id: 2,
      nome: 'Charles Marc Hervé Perceval Leclerc',
      email: 'charles.leclerc@f1.com',
      telefone: '+377 98765-4321',
      marcador: enums.Marcador.ESCOLA
    },
    {
      id: 3,
      nome: 'Pierre Jean-Jacques Gasly',
      email: 'pierre.gasly@f1.com',
      telefone: '+33 98765-4321',
      marcador: enums.Marcador.FAMILIA
    },
    {
      id: 4,
      nome: 'Esteban José Jean-Pierre Ocon-Khelfane',
      email: 'esteban.ocon@f1.com',
      telefone: '+33 98765-4321',
      marcador: enums.Marcador.AMIGOS
    },
    {
      id: 5,
      nome: 'Fernando Alonso Díaz',
      email: 'fernando.alonso@f1.com',
      telefone: '+34 98765-4321',
      marcador: enums.Marcador.FAMILIA
    },
    {
      id: 6,
      nome: 'Lance Strulovitch',
      email: 'lance.strol@f1.com',
      telefone: '+1 98765-4321',
      marcador: enums.Marcador.ESCOLA
    },
    {
      id: 7,
      nome: 'Kevin Jan Magnussen',
      email: 'gevin.magnussen@f1.com',
      telefone: '+45 98765-4321',
      marcador: enums.Marcador.ESCOLA
    },
    {
      id: 8,
      nome: 'Nicolas Hülkenberg',
      email: 'nico.hulkenberg@f1.com',
      telefone: '+49 98765-4321',
      marcador: enums.Marcador.TRABALHO
    },
    {
      id: 9,
      nome: 'Lando Norris',
      email: 'lando.norris@f1.com',
      telefone: '+44 98765-4321',
      marcador: enums.Marcador.AMIGOS
    },
    {
      id: 10,
      nome: 'Oscar Jack Piastri',
      email: 'oscar.piastri@f1.com',
      telefone: '+61 98765-4321',
      marcador: enums.Marcador.TRABALHO
    },
    {
      id: 11,
      nome: 'Sir Lewis Carl Davidson Hamilton',
      email: 'lewis.hamilton@f1.com',
      telefone: '+44 98765-4321',
      marcador: enums.Marcador.AMIGOS
    },
    {
      id: 12,
      nome: 'George William Russell',
      email: 'george.russell@f1.com',
      telefone: '+44 98765-4321',
      marcador: enums.Marcador.AMIGOS
    },
    {
      id: 13,
      nome: 'Daniel Joseph Ricciardo',
      email: 'daniel.ricciardo@f1.com',
      telefone: '+61 98765-4321',
      marcador: enums.Marcador.ESCOLA
    },
    {
      id: 14,
      nome: 'Yuki Tsunoda',
      email: 'yuki.tsunoda@f1.com',
      telefone: '+81 98765-4321',
      marcador: enums.Marcador.FAMILIA
    },
    {
      id: 15,
      nome: 'Max Emilian Verstappen',
      email: 'max.verstappen@f1.com',
      telefone: '+31 98765-4321',
      marcador: enums.Marcador.TRABALHO
    },
    {
      id: 16,
      nome: 'Sergio Michel Pérez Mendoza',
      email: 'sergio.perez@f1.com',
      telefone: '+52 98765-4321',
      marcador: enums.Marcador.FAMILIA
    },
    {
      id: 17,
      nome: 'Zhou Guanyu',
      email: 'zhou.guanyu@f1.com',
      telefone: '+86 98765-4321',
      marcador: enums.Marcador.FAMILIA
    },
    {
      id: 18,
      nome: 'Valtteri Viktor Bottas',
      email: 'valtteri.bottas@f1.com',
      telefone: '+358 98765-4321',
      marcador: enums.Marcador.FAMILIA
    },
    {
      id: 19,
      nome: 'Logan Hunter Sargeant',
      email: 'logan.sargeant@f1.com',
      telefone: '+1 98765-4321',
      marcador: enums.Marcador.TRABALHO
    },
    {
      id: 20,
      nome: 'Alexander Albon Ansusinha',
      email: 'alexander.albon@f1.com',
      telefone: '+60 98765-4321',
      marcador: enums.Marcador.AMIGOS
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',

  initialState,

  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },

    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },

    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
