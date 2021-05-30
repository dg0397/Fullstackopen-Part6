import anecdoteService from '../services/anecdotes'

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.updateAnecdote(anecdote)
    dispatch({
      type : 'VOTE',
      data : votedAnecdote
    })
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createAnecdote(content)
    dispatch({
      type : 'ADD',
      data : anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type : "INIT_ANECDOTES",
      data: anecdotes
    })
  }
}

const reducer = (state = [] , action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':{
      const votedAnecdote = action.data

      return state.map(anecdote => anecdote.id === votedAnecdote.id ? votedAnecdote : anecdote);
    }
    case 'ADD':{
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES':{
      return [...action.data]
    }
    default:
      return state
  }
}

export default reducer