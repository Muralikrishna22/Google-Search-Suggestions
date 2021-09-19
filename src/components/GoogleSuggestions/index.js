import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchValue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestionsList">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestionDetails={eachItem}
                updateSearchValue={this.updateSearchValue}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
