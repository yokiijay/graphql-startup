import UserModel from "../Models/UserModel"

export default {
  Query: {
    UserList: () => UserModel.get(),
    User: (parent, {id})=> UserModel.get({id})
  },
  Mutation: {
    SaveUser: (parent, {input: {name, age}})=> new UserModel({name, age}).create(),
    DeleteUser: (parent, {id})=> UserModel.delete({id}),
    UpdateUser: (parent, {id, input})=> UserModel.update({id, input})
  }
}