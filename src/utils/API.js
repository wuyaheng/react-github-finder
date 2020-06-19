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
                'client_id': '3cb085ba1a68cef8af82',
                'client_secret': 'd983c945203884606985fc1a3c38c20e39b5b317'
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
                'client_id': '3cb085ba1a68cef8af82',
                'client_secret': 'd983c945203884606985fc1a3c38c20e39b5b317' 
            }
        })
}
