import React, { Component } from 'react'
import SearchForm from './components/SearchForm/index'
import ResultList from './components/SearchForm/index'
import API from './utils/API'

class App extends Component {
    state = {
        username: "",
        results: []
      };
    
      // When this component mounts, search the Giphy API for pictures of kittens
      componentDidMount() {
        this.getUser("PhoebeYahengWu");
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
    


    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />
                <ResultList results={this.state.results} />
            </div>
        )
    }
}

export default App;
