import { nanoid } from 'nanoid'
import loadDb from './db'

export default class UserModel {
  constructor({name, age}){
    this.id = nanoid()
    this.name = name
    this.age = age
  }

  async create(){
    const db = await loadDb()
    if(db.get('users').find({name: this.name})){
      throw Error('name is already exists')
    }
    db.get('users').push({
      id: this.id,
      name: this.name,
      age: this.age
    }).write()
  }
}
