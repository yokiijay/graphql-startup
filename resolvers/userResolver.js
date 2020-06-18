import UserModel from "../Models/UserModel"

export default {
  Mutation: {
    createUser: (parent, {input: {name, age}})=> new UserModel({name, age}).create()
  }
}