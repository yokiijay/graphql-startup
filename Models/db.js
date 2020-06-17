import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')
// const loadDb = ()=>{
//   return new Promise(res=>{
//     low(adapter).then(db=>res(db))
//   })
// }

const loadDb = ()=>low(adapter)

export default loadDb