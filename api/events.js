'use strict'

const Event= require('../models/events.js').Event

let app = require('./api.js')

app.get('/userEvents', function(req,res) {
  Event.findAll()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.send(err)
  })
})

app.delete('/delete-event/:id', function(req,res) {
  Event.destroy({where: {userId:req.params.id}})
    .then((result) => {
      res.send('Event Deleted')
    })
    .catch((err) => {
      res.send(err)
    })
})

app.patch('/update-event', function(req,res) {
  Event.update({
    title:req.body.title,
    date:req.body.date,
    cost: req.body.cost,
    description: req.body.description,
    keywords: req.body.keywords
  },{
    where: {
      userId: req.body.userId
    }
  })
  .then((result) => {
    res.send('Event Updated!')
  })
  .catch((err) => {
    res.send(err)
  })
})

app.post('/add-event', function(req,res) {
    Event.create(req.body)
    .then((event) => {
      event.save();
    })
    .catch((err) => {
      res.send(err)
    })
  })
