export default function findInText(text, word){
    const regex1 = new RegExp(word, 'i')

    //return console.log(text.search(regex1), regex1.test(text), text.match(regex1));

    return regex1.test(text)
}