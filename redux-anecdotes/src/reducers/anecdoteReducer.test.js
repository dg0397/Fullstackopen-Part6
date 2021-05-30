import anecdoteReducer from './anecdoteReducer';
import deepFreeze from 'deep-freeze'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const initialState =  anecdotesAtStart.map(asObject)

describe('anecdoteReducer',() => {
    test('should return a proper initial state when called with undefined state', () => {
        const state = []
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = anecdoteReducer(undefined, action)
        expect(newState).toEqual(state)
    })
    test('an anecdote can be voted', () => {
        const state = initialState;
        const noteToVote = initialState[Math.floor(Math.random() * initialState.length)]
        const votedNote = {...noteToVote, votes : noteToVote.votes + 1}
        
        const action = {
            type : 'VOTE',
            data : votedNote
        }

        deepFreeze(state)
        const newState = anecdoteReducer(state,action)
        expect(newState).toContainEqual(votedNote)
    })
    test('a new anecdote can be added',() => {
        const state = initialState;
        const newAnecdote = "React is the best Library"
        
        const action = {
            type : 'ADD',
            data : asObject(newAnecdote)
        }
        
        deepFreeze(state)
        const newState = anecdoteReducer(state,action)
        expect(newState).toHaveLength(state.length + 1)
        expect(newState).toContainEqual(action.data)
    })
    test('a group of anecdotes can be added at the same time',() => {
        const state = []

        const action = {
            type : 'INIT_ANECDOTES',
            data : initialState
        }

        deepFreeze(state)
        const newState = anecdoteReducer(state,action)
        expect(newState).toHaveLength(initialState.length)
        expect(newState).toEqual(initialState)
    })
})
