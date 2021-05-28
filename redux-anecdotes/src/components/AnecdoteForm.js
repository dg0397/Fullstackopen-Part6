import { useDispatch } from "react-redux";
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from "../reducers/notificationReducer";
import anecdoteServices from "../services/anecdotes";

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addNewOne = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        const message = `You added a new Anecdote: ${content}`
        e.target.anecdote.value = ""
        const newAnecdote = await anecdoteServices.createAnecdote(content)
        dispatch(addAnecdote(newAnecdote.content))
        dispatch(setMessage(message))
        setTimeout(()=>{
            dispatch(setMessage(""))
        },5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit = {addNewOne}>
                <div><input name = 'anecdote'/></div>
                <button type = 'submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm