import anecdoteReducer from './anecdoteReducer';
import { initialState } from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer',() => {
    test('should return a proper initial state when called with undefined state', () => {
        const state = initialState
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = anecdoteReducer(undefined, action)
        expect(newState).toEqual(state)
    })
    test('an anecdote can be voted', () => {
        const state = initialState;
        const noteToVote = initialState[Math.floor(Math.random() * initialState.length)]
        const action = {
            type: 'VOTE',
            data: { id : noteToVote.id }
        }
        deepFreeze(state)
        const newState = anecdoteReducer(state,action)
        expect(newState).toContainEqual({...noteToVote,votes: 1})
    })
})
