import axios from 'axios';

export default {
    getUser: (username) =>
        axios({
            'method': 'GET',
            'url': 'https://api.github.com/users/' + username,
            'headers': {
                'content-type': 'application/json'
            },
            'data':{
                'client_id': process.env.REACT_APP_GITHUB_CLIENT_ID,
                'client_secret': process.env.REACT_APP_GITHUB_CLIENT_SECRET
            }
        }),

    getRepo: (username) =>
        axios({
            'method': 'GET',
            'url': 'https://api.github.com/users/' + username + '/repos',
            'headers': {
                'content-type': 'application/json'
            },
            'data':{
                'client_id': process.env.REACT_APP_GITHUB_CLIENT_ID,
                'client_secret': process.env.REACT_APP_GITHUB_CLIENT_SECRET
            }
        })
}
