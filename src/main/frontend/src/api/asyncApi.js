
const { stringify } = JSON;

const headers = {
    'Content-type': 'application/json',
    Accept: 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
};

let authdata1 = window.btoa(`user2:1`);
let authdata = localStorage.getItem('authData');

headers.Authorization = 'Basic ' + authdata;

const apiPathUrl = 'http://localhost:8080';

const getFullUrl = (url, params) =>
    apiPathUrl + (url || '') + (params ? '?' + queryParams(params) : '')

function queryParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

const credentials = 'same-origin';

const async = {
    getJSON({ url, params }) {
        return fetch(getFullUrl(url, params), {
            headers,
            credentials,
            mode: 'cors',
        });
    },
    postJSON({ url, data, params, options = {} }) {
        return fetch(getFullUrl(url, params), {
            ...options,
            headers,
            credentials,
            method: 'POST',
            body: stringify(data),
            mode: 'cors',
        });
    },
    deleteJSON({ url, data, options = {} }) {
        return fetch(getFullUrl(url), {
            ...options,
            headers,
            credentials,
            method: 'DELETE',
            body: stringify(data),
        });
    },
};

export default (method, ...args) => {
    return async[method](...args)
        .then(response => {
            if (method === 'getJSON') {
                return response.json();
            }

            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};