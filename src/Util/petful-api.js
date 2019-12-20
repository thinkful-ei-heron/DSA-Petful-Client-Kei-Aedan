import config from '../config';
const URL = config.REACT_APP_URL;

const petfulApi = {
    getHumans() {
        return fetch(`${URL}/humans`, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
        .then(dataString => {
            if (dataString.stringQu !== null){
                let dataArr = dataString.stringQu.split(', ');
                return dataArr;    
            } else {
                return [];
            }
        })
    },
    deleteHuman() {
        return fetch(`${URL}/humans`, {
            method: 'DELETE'
        })
        .then(res => {
            return;
        })
    },
    enqueueHuman(name){
        return fetch(`${URL}/humans`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(res => {
            return;
        })
    },
    getCat() {
        return fetch(`${URL}/cats`, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
    },
    deleteCat() {
        return fetch(`${URL}/dogs`, {
            method: 'DELETE'
        })
        .then(res => {
            return;
        })
    },
    getDog() {
        return fetch(`${URL}/dogs`, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
    },
    deleteDog() {
        return fetch(`${URL}/dogs`, {
            method: 'DELETE'
        })
        .then(res => {
            return;
        })
    }

}


export default petfulApi;