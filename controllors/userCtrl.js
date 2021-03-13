const Users = require ('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const userCtrl = {
register : async(req,res)=>
{
    try{
        const{name,email,password} =req.body
        if(!name || !email ||!password)
           return res.status(400).json({msg: "please fill in all fields."})
        console.log(req.body)
        if(!validateEmail(email))
        return res.status(400).json({msg: "Invalid email"})

  const user = await Users.findOne({email})
  if(user) 
  return res.status(400).json({msg: "email already exists"})

  if(password.length<6)
  return res.status(400).json({msg: "password must be at least 6 characters"})
const passwordHash = await bcrypt.hash(password,12)
console.log({passwordHash})
const newUser={
    name,email, password:passwordHash
}
const activation_token = createActivationToken(new)

     res.json({msg :"Register Test"})
    }
    
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const createActivationToken = (payload) =>{
    return jwt.sign(payload,)
}
module.exports = userCtrl