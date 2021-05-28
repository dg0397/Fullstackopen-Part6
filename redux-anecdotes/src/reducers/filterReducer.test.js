import filterReducer from "./filterReducer";
import deepFreeze from "deep-freeze";
import {initialState} from './anecdoteReducer'
import {setFilter} from './filterReducer'

describe('filterReducer',()=>{
    test('should return a proper initial state when called with undefined state', () => {
        const state = initialState.filter
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = filterReducer(undefined, action)
        expect(newState).toEqual(state)
    })
    test('set a filter',() => {
        const state = initialState.filter
        const word = "react"
        const action  = setFilter(word)
        
        const newState = filterReducer(state,action)
        expect(newState).toEqual(word)
    })
})