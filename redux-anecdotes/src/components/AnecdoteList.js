import { useDispatch , useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes,filter}) => {
      const filteredAnecdotes = filter === '' ? [...anecdotes] : anecdotes.filter(anecdote => anecdote.content.match(new RegExp(filter,'i')))
      return filteredAnecdotes.sort((anecdote1,anecdote2) => anecdote2.votes - anecdote1.votes)
    })
    const dispatch = useDispatch()

    const vote = ({id,content}) => {
      const message = `You voted "${content}"`
      dispatch(voteAnecdote(id))
      dispatch(setMessage(message))
      setTimeout(()=>{
        dispatch(setMessage(""))
      },5000)
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                  </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList