import { connect } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = props => {
  const handleChange = (event) => {
    const word = event.target.value
    props.setFilter(word)
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

const mapDispatchToPros = {
  setFilter
}

const ConnectedFilter = connect(null,mapDispatchToPros)(Filter)
export default ConnectedFilter