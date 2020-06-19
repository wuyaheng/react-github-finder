import React from 'react'

function SearchForm(props) {
    return (
    <nav>
        <div class="nav-wrapper">
        <form>
        <div className="input-field">
          <input
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyPress}
            value={props.value}
            name="username"
            type="search"
            placeholder="Search For Another GitHub User"
            id="search"
            autocomplete="off"
          />
           <label className="label-icon" for="search"><i className="material-icons">search</i></label>
           <i className="material-icons">close</i>
        </div>
      </form>
      </div>
    </nav>
    )
}

export default SearchForm;
