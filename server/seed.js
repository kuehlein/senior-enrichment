// seed file courtesy of Brian Macdonald  ** thank you :) **
'use strict'

const db = require('../db')
const { Student, Campus } = require('../db/models')

const campuses = [
  { name: "Magic Marge's Discount Magic Training", image: './public/magicalmargesdiscountmagictraining.jpg' },
  { name: "Al's Almost Magic Academy", image: './public/magicalmargesdiscountmagictraining.jpg' },
  { name: "Morty's Mildly Magical Institute", image: './public/magicalmargesdiscountmagictraining.jpg' },
  { name: "Pete's Unlicensed Wizardry Training", image: './public/magicalmargesdiscountmagictraining.jpg' }
]

const id = () => Math.round(Math.random() * (campuses.length - 1)) + 1

const students = [{
  name: 'Hermione',
  email: 'wickedwitch@magicmail.com',
  campusId: id()
}, {
  name: 'Harry',
  email: 'mugglefriend88@dumbledor.gov',
  campusId: id()
}, {
  name: 'Ron',
  email: 'magicman@netscape.com',
  campusId: id()
}, {
  name: 'Fred',
  email: 'mrspellscaster@excite.com',
  campusId: id()
}, {
  name: 'George',
  email: 'expeliarmus@accio.com',
  campusId: id()
}, {
  name: 'Voldemort',
  email: 'puppybowl@puppybowl.com',
  campusId: id()
}, {
  name: 'Henry',
  email: 'magic55@magic.com',
  campusId: id()
}, {
  name: 'Merlin',
  email: 'usa2010awesome@broomsticks.com',
  campusId: id()
}, {
  name: 'Snape',
  email: 'meangoodguy@potions.com',
  campusId: id()
}, {
  name: 'Derpkins',
  email: 'magicalbeasts@gryffindore.edu',
  campusId: id()
}, {
  name: 'McGonnagal',
  email: 'billgates@edge.com',
  campusId: id()
}, {
  name: 'Goblet of Fire',
  email: 'tootsthecat@gmail.com',
  campusId: id()
}, {
  name: 'Hedwig',
  email: 'owl@owl.com',
  campusId: id()
}, {
  name: 'That Rat Guy',
  email: 'cheese@cheese.com',
  campusId: id()
}, {
  name: 'Uncle Werewolf',
  email: 'awooo@grrr.com',
  campusId: id()
}, {
  name: 'Big Unmagical Guy',
  email: 'urawzardarry@bigguy.com',
  campusId: id()
}, {
  name: 'Pete The Doby House Elf',
  email: 'thatmilquetoastguy@iguess.com',
  campusId: id()
}, {
  name: 'Hogwarts Joe',
  email: 'info@info-wars.com',
  campusId: id()
}]


const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
    .then(() =>
      Promise.all(students.map(student =>
        Student.create(student))
      )
    )
    .catch(console.error)

const main = () => {
  console.log('Syncing db...')
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
