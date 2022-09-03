const express = require('express')
const port = 3001
const app = express()
const animalDetailSearch = require('./controllers/methods.js')


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/findBreed', animalDetailSearch.findBreed)

// app.get('/findSex', animalDetailSearch.findSex)

// app.get('/findColor', animalDetailSearch.findColor)

// app.get('/findSize', animalDetailSearch.findSize)

// app.get('findHairLength', animalDetailSearch.findHairLength)

// app.get('findSexOrganRemoval', animalDetailSearch.findSexOrganRemoval)
