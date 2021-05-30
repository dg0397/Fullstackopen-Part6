import filterReducer from "./filterReducer";
import deepFreeze from "deep-freeze";
import {setFilter} from './filterReducer'

describe('filterReducer',()=>{
    test('should return a proper initial state when called with undefined state', () => {
        const state = ''
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = filterReducer(undefined, action)
        expect(newState).toEqual(state)
    })
    test('set a filter',() => {
        const state = ''
        const word = "first"
        const action  = setFilter(word)
        
        deepFreeze(state)
        const newState = filterReducer(state,action)
        expect(newState).toEqual(word)
    })
})