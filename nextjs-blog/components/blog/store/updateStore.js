import read from './read'

export default function UpdateStore(data, _id){
    
    const exStore = read();
    const newStore = exStore.map(el => el._id == _id ? Object.assign({}, data, {_id: el._id}): el)
    sessionStorage.setItem('article', JSON.stringify(newStore));
};