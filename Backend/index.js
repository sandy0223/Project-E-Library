const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const bcrypt = require('bcrypt');
require('dotenv').config()


const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3001;

mongoose.connect(process.env.MONGO_URI)

app.post('/signup',(req,res)=>{
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  UserModel.create({ username, email, password: hashedPassword })
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
  const { email, password } = req.body;
  UserModel.findOne({ email })
  .then(user => {
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if(isValidPassword){
      res.json({ message: 'Login successful',user });
    }else{
      res.status(401).json({ message: 'Invalid credentials' });
    }
  })
})

app.listen(PORT,()=>{
  console.log('Server is good to go!');
})