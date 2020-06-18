import UserModel from "../Models/UserModel"

export default {
  Query: {
    allUsers: () => UserModel.get()
  },
  Mutation: {
    createUser: (parent, {input: {name, age}})=> new UserModel({name, age}).create()
  }
}