import asyncAPI from "../api";


const getAction = (url) => {
    return asyncAPI('getJSON', {
        url: url
    })
};
export default {
    getAction
}


