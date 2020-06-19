import loadDb from './db'
import { nanoid } from 'nanoid'

export default class PostModel {
  constructor({ title, content, author }) {
    this.id = nanoid()
    this.title = title
    this.content = content
    this.author = author
  }

  async create() {
    const db = await loadDb()
    const user = await db.get('users').find({ id: this.author }).value()
    if (user){
      this.author = user
    }else {
      return Error(`Author doesn't exist`)
    }
    const res = await db
      .get('posts')
      .push({
        id: this.id,
        title: this.title,
        content: this.content,
        author: user
      })
      .write()

    return this
  }

  static async get(props) {
    const db = await loadDb()
    if (!props) return db.get('posts').value()
    const post = db.get('posts').find(props).value()
    post.author = db.get('users').find({id: post.author}).value()
    return post
  }
}
