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
    if(db.get('users').find({name: this.name}).value()){
      throw Error('name is already exists')
    }
    db.get('users').push({
      id: this.id,
      name: this.name,
      age: this.age
    }).write()

    return this
  }

  static async get(props){
    const db = await loadDb()
    if(!props) return db.get('users').value()
    return db.get('users').find(props).value()
  }

  static async delete(props){
    const db = await loadDb()
    const res = await db.get('users').remove(props).write()
    if(!res[0]) { throw Error('User doesn\'t exist') }
    return true
  }

  static async update(props){
    const {id, input} = props
    const db = await loadDb()
    const res = await db.get('users').find({id}).assign(input).write()
    return res
  }
}
