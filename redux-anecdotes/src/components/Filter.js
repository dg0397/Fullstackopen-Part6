import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
      console.log(event)
    const word = event.target.value
    dispatch(setFilter(word))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter