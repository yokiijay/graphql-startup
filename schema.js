import path from 'path'
import { makeExecutableSchema, mergeTypeDefs, loadFilesSync, mergeResolvers } from 'graphql-tools'

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './typeDefs')))
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers')))

export default makeExecutableSchema({
  typeDefs,
  resolvers
})