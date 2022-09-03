const express = require('express')
const port = 3001
const app = express()
const axios = require('axios')

const findBreed = (req, res) => {
  axios.get('/https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342').then(response => {
    res.send(response)
  }).catch(err => {
    console.log(err)
  })
}

module.exports.findBreed = findBreed;
