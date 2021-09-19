import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchValue} = props
  const {suggestion} = suggestionDetails

  const searchSuggestion = () => {
    updateSearchValue(suggestion)
  }

  return (
    <li className="suggestion-item" onClick={searchSuggestion}>
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
      />
    </li>
  )
}
export default SuggestionItem
