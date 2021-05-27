import anecdoteReducer from './anecdoteReducer';
import { initialState, voteAnecdote, addAnecdote } from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer',() => {
    test('should return a proper initial state when called with undefined state', () => {
        const state = initialState.anecdotes
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = anecdoteReducer(undefined, action)
        expect(newState).toEqual(state)
    })
    test('an anecdote can be voted', () => {
        const state = initialState.anecdotes;
        const noteToVote = initialState.anecdotes[Math.floor(Math.random() * initialState.anecdotes.length)]
        
        const action = voteAnecdote(noteToVote.id) //action creator

        deepFreeze(state)
        const newState = anecdoteReducer(state,action)
        expect(newState).toContainEqual({...noteToVote,votes: 1})
    })
    test('a new anecdote can be added',() => {
        const state = initialState.anecdotes;
        const newAnecdote = "React is the best Library"
        
        const action = addAnecdote(newAnecdote)
        
        deepFreeze(state)
        const newState = anecdoteReducer(state,action)
        expect(newState).toHaveLength(state.length + 1)
        expect(newState).toContainEqual(action.data)
    })
})
