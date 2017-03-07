//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//code to create/acess ObjectID from destructured object above
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
    console.log('Connected to MongoDB server.');
//     db.collection('Todos').insertOne({
//       text: 'Something todo',
//       completed: false
//     }, (err, result) => {
//       if(err){
//         return console.log('Unable to insert todo.', err);
//       }
//       console.log(JSON.stringify(result.ops, undefined, 2));
//     });
//     db.close();
// });

db.collection('Users').insertOne({
  name: 'Rick Thornbrugh',
  age: 46,
  location: 'Bonney Lake, WA.'
}, (err, result) => {
  if(err){
    return console.log('Unable to insert User data.', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});
  db.close();
});
