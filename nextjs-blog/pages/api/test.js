export default function handler(req, res) {
    const fs = require('fs')

    const content = 'Some content!'

    fs.writeFile('./test.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
    })

  }