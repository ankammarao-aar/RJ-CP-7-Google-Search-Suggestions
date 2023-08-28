// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateInput} = props
  const {suggestion} = suggestions

  const onSuggestions = () => {
    updateInput(suggestion)
  }

  return (
    <li className="list-item">
      <p className="items">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onSuggestions}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
