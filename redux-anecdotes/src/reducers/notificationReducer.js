import { initialState } from "./anecdoteReducer"

const notificationReducer = (state = initialState.message, action) => {
    switch (action.type) {
      case 'SET_MESSAGE':
        return action.message
      default:
        return state
    }
}

export const setMessage = message => {
    return {
        type : 'SET_MESSAGE',
        message
    }
}

export default notificationReducer