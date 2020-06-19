import PostModel from '../Models/PostModel'
import UserModel from '../Models/UserModel'

export default {
  Query: {
    PostList: () => PostModel.get(),
    Post: (parent, args) => PostModel.get(args)
  },
  Mutation: {
    SavePost: (parent, args) => {
      return new PostModel(args.input).create()
    }
  }
}
