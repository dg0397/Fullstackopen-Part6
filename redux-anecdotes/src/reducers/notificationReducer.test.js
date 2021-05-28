import notificationReducer from "./notificationReducer";
import deepFreeze from "deep-freeze";
import {initialState} from './anecdoteReducer'
import { setMessage } from './notificationReducer'

describe('notificationReducer',()=>{
    test('should return a proper initial state when called with undefined state', () => {
        const state = initialState.message
        const action = {
          type: 'DO_NOTHING'
        }
    
        const newState = notificationReducer(undefined, action)
        expect(newState).toEqual(state)
    })
    test('set a message',() => {
        const state = initialState.message
        const message = "This is a new Notification"
        const action  = setMessage(message)
        
        const newState = notificationReducer(state,action)
        expect(newState).toEqual(message)
    })
})