const fetch = require('node-fetch')
const get = async () => {
    try {
        let response = await fetch('http://covid19api.xapix.io/v2/locations', {
            method: 'GET'
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}
module.exports = {get}