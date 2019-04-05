const path = require('path')
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')

const typesArray = fileLoader(path.join(__dirname, './*.type.*'))
module.exports = mergeTypes(typesArray)
