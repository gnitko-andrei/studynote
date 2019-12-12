import asyncAPI from "../api";


const getAction = (url, processId) => {
    return asyncAPI('getJSON', {
        url: url,
        params: { processId: processId }
    })
};
export default {
    getAction
}


