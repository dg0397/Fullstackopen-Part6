import { useDispatch } from "react-redux";
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addNewOne = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ""
        dispatch(addAnecdote(content))
    }

    return (
        <form onSubmit = {addNewOne}>
            <div><input name = 'anecdote'/></div>
            <button type = 'submit'>create</button>
        </form>
    )
}

export default AnecdoteForm