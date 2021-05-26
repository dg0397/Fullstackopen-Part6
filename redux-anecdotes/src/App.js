import React from 'react'
import { addAnecdote, voteAnecdote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => {
    const copy = [...state]
    return copy.sort((anecdote1,anecdote2) => anecdote2.votes - anecdote1.votes)
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const addNewOne = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ""
    dispatch(addAnecdote(content))
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit = {addNewOne}>
        <div><input name = 'anecdote'/></div>
        <button type = 'submit'>create</button>
      </form>
    </div>
  )
}

export default App