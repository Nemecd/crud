const app = require('express')()
const { response } = require('express')
const mongoose = require('mongoose')
const connect_strg = 'mongodb://localhost:27017/profiledb'
const { Schema } = mongoose
mongoose.connect(connect_strg,{
    useUnifiedTopology: true,
    useNewUrlParser: true
    
}, (err)=>{
    if(err){
        console.log({err})
    }else{
       console.log('Database Connected')
    }
})
//schema
const profileSchema = new Schema({
    Name: String,
    Email: String,
    Phone_Number: String,
    Country:String
})
const people = mongoose.model('people', profileSchema)
//New Member C = CREATE 
// people.create(
//     {
//     Name: 'Uban Samuel',
//     Email: 'chinemeremsam91@gmail.com',
//     Phone_Number:09027829164,
//     Country:'Nigeria'
//    },
//    {
//        Name: 'Favour Egejuru',
//        Email: 'favour@gmail.com',
//        Phone_Number:'0903562868',
//        Country:'Congo'
//    }

// ), function(err,people){
//       if(err){
//           console.log({err})
//       }else{
//           console.log('Data added Successfully')
//       }
// }
//get R= RETRIVE
app.get('/people',(req,res)=>{
    people.find({}, (err,people) =>{
        if(err){
            return res.status(500).json({err})
        }else{
            return res.status(500).json({people})
        }
    })
})
// UPDATE
//DELETE


app.listen(9090, () => console.log('connection Sucessful'))