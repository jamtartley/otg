const db = require('./db')

const Mutation = {
  createThing: (root, args, context, info) => {
    return db.things.create({name: args.name})
  }
}

const Query = {
   allThings:() => db.things.list()
}

module.exports = {Query, Mutation}
