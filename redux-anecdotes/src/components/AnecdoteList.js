import { useDispatch , useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      const copy = [...state.anecdotes]
      return copy.sort((anecdote1,anecdote2) => anecdote2.votes - anecdote1.votes)
    })
    const dispatch = useDispatch()

    const vote = (id) => {
      dispatch(voteAnecdote(id))
    }

    return (
        <div>
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
        </div>
    )
}

export default AnecdoteList