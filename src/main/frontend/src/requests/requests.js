import asyncAPI from "../api";


const getAction = (url, processId) => {
    return asyncAPI('getJSON', {
        url: url,
    })
};

const postAction = (url, data) => {
    return asyncAPI('postJSON', {
        url: url,
        data: data
    })
};

const putAction = (url, data) => {
    return asyncAPI('putJSON', {
        url: url,
        data: data
    })
};

const deleteAction = (url, data) => {
    return asyncAPI('deleteJSON', {
        url: url,
        data: data,
    })
};

export  default {
    getAction,
    postAction,
    putAction,
    deleteAction
}


