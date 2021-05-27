import notificationReducer from "./notificationReducer";
import deepFreeze from "deep-freeze";
import {initialState} from './anecdoteReducer'

describe('notificationReducer',()=>{
    test('should return a proper initial state when called with undefined state', () => {
        const state = initialState.message
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = notificationReducer(undefined, action)
        expect(newState).toEqual(state)
    })
})