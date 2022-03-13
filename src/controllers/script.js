const { json } = require('express/lib/response')
const api = require('../services/api')

class Controllers{

    static welcome(req, res){
        res.send("Documentação da api: https://github.com/bryantorresribeiro/Kenzinhos-Nasa-API")
    }

    static day(req, res){
        api.get(`planetary/apod?api_key=${process.env.API_KEY}`).then(resp => {
            const {title, copyright, explanation, url, date} = resp.data
            const obj = {
                titulo: title,
                data: date,
                autor: copyright,
                info: explanation,
                img:  url
            }
        res.send(obj).status(200)
        }).catch( () => {
            res.status(404)
         }) 
    }

    static nasaSearch(req, res){
        api.get(`https://images-api.nasa.gov/search?q=${req.params.value}`).then(resp => {
         const {title, description}  = resp.data.collection.items[0].data[0]
         const {href}  = resp.data.collection.items[0].links[0]
         const obj = {
            titulo: title,
            descricao: description,
            midia: href
         }
         res.send(obj).status(200)
        }).catch( () => {
            res.status(404)
         })
    }

    static nasaImg(req, res){
        api.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&start_date=${req.params.initialDate}&end_date=${req.params.finalDate}`).then(resp => {
         res.send(resp.data).status(200)
        }).catch( () => {
            res.status(404)
         })
    }

    static marsRamdomImg(req, res){
            const year = Math.random() * (2020 - 2015) + 2014
            const yearR = year.toFixed()
            const md = Math.random() * (9 - 1) + 1
            const mdR = md.toFixed()
         
        api.get(`mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yearR}-0${mdR}-0${mdR}&api_key=${process.env.API_KEY}`).then(resp => {
           const {img_src, earth_date} = resp.data.photos[0]
           const obj = {
               data: earth_date,
               img: img_src
           }
           res.send(obj).status(200)
        }).catch( () => {
            res.status(404)
           })
    }

    static marsImg(req, res){
        api.get(`mars-photos/api/v1/rovers/curiosity/photos?earth_date=${req.params.initialDate}&api_key=${process.env.API_KEY}`).then(resp => {
            const {img_src, earth_date} = resp.data.photos[0]
            const obj = {
                data: earth_date,
                img: img_src
            }
            res.send(obj).status(200)
        }).catch( () => {
            res.status(404)
           })
    }

}
module.exports = Controllers;

