import React, { Component } from 'react'
import SearchForm from './components/SearchForm/index'
import ResultList from './components/ResultList/index'
import API from './utils/API'

class App extends Component {
    state = {
        username: "",
        results: [],
        repos: []
      };
    

      componentDidMount() {
        this.searchProfile("PhoebeYahengWu");
        this.searchProfileRepos("PhoebeYahengWu")
      }
    
      searchProfile = query => {
        API.getUser(query)
          .then(res => this.setState({ results: res.data }))
          .catch(err => console.log(err));
      };

      searchProfileRepos = query => {
        API.getRepo(query)
        .then(res => this.setState({ repos: res.data}))
        .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        let value = event.target.value;
        this.setState({
          username: value
        });
      };

      handleFormSubmit = event => {
          event.preventDefault();
          this.searchProfile(this.state.username)
          this.searchProfileRepos(this.state.username)
          this.setState({
            username: ''
          });
      }

    render() {
        return (
            <div>
                <SearchForm
                    username={this.state.username}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />
                <ResultList 
                results={this.state.results}
                repos={this.state.repos} 
                 /> 
            </div>
        )
    }
}

export default App;