const axios = require("axios")

const api = axios.create({
    baseURL: 'https://api.nasa.gov/'
})

module.exports = api