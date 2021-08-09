import read from './read'

export default function Store(data){

    const count = JSON.parse(sessionStorage.getItem("count"));

    if(count == null){
        sessionStorage.setItem('count', JSON.stringify(1));
    } else {
        sessionStorage.setItem('count', JSON.stringify(count+1));
    };
    
    const exStore = read();
    const _id = count != null ? count : 0;
    const newData = Object.assign({}, data, {_id: _id});
    const newStore = exStore != null ? [newData].concat(exStore) : [newData];
    sessionStorage.setItem('article', JSON.stringify(newStore));
};