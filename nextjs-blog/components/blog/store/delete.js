import read from './read'

export default function Delete(_id){
    
    const exStore = read();
    const newStore = exStore.filter(el => el._id != _id)
    sessionStorage.setItem('article', JSON.stringify(newStore));
};