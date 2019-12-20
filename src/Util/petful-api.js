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
    }
}


export default petfulApi;