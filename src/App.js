import React, { Component } from 'react'
import SearchForm from './components/SearchForm/index'
import ResultList from './components/ResultList/index'
import API from './utils/API'

class App extends Component {
    state = {
        username: "",
        results: {}
      };
    

      componentDidMount() {
        this.searchProfile("PhoebeYahengWu");
      }
    
      searchProfile = query => {
        API.getUser(query)
          .then(res => console.log(res))
          .then(res => this.setState({ results: res.data.data }))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    

      handleFormSubmit = event => {
          event.preventDefault();
          this.searchProfile(this.state.username)
      }

    render() {
        return (
            <div>
                <SearchForm
                    username={this.state.username}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />
                <ResultList results={this.state.results} />
            </div>
        )
    }
}

export default App;
