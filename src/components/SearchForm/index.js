import React from 'react'

function SearchForm(props) {
    return (
        <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="username"
            type="text"
            className="form-control"
            placeholder="Search For Another GitHub User"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-dark">
            Search
          </button>
        </div>
      </form>
    )
}

export default SearchForm;
