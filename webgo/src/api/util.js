import axios from 'axios'

const headerOptions = {
    headers: {
        'Content-Type': 'text/html,application/json'
    }
}
export function formateURLOnlyGet(url, data = {}){
    data = Object.entries(data)
    if(data.length){
        url += url.indexOf("?")==-1 ? "?" : "";
        url += Object.entries(data).map(item=>{
            return item[1].join('=')
        }).join('&')
    }
    return url
}
export function getData(url, json){
    if(!json){json = {}}
    return axios.get(formateURLOnlyGet(url, json), headerOptions)
        .then(res => {
            return res.data;
        })
        .catch(error => error)
}