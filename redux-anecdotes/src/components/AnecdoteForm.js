import { connect } from "react-redux";
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {

    const addNewOne = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        const message = `You added a new Anecdote: ${content}`
        e.target.anecdote.value = ""
        props.addAnecdote(content)
        props.setMessage(message,5)
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

const mapDispatchToPros = {
    addAnecdote,
    setMessage
}

const ConnectedAnecdoteForm = connect(null,mapDispatchToPros)(AnecdoteForm)

export default ConnectedAnecdoteForm