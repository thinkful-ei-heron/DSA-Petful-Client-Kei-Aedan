import config from '../config';
const URL = config.URL;

const petfulApi = {
    getHumans() {
        return fetch(`${URL}/humans`, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
        .then(dataString => {
            console.log(dataString);
            let dataArr = dataString.stringQu.split(', ');
            return dataArr;
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