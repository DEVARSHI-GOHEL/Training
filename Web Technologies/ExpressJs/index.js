// Adding ExpressJs module in node
const express = require('express');
const Joi = require('joi');
const fs = require('fs');
const app = express();
app.use(express.json());

var users = [];
fs.readFile('./data.json', 'utf-8', (error, data) => {

  if(error){
    console.log(`Couldnt read file ${error}`);
  }
  else{
    users = JSON.parse(data);
  }

});

// View root
app.get('/', (req, res) => {
  res.send("Hello World");
});

// View all users
app.get('/api/users', (req, res) =>{
  res.send(users);
});

// View user by id
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if(!user) return res.status(404).send("User does not exist!");

  res.send(user);
});

// Adding more users
app.post('/api/users', (req, res) => {

  const { error } = validateData(req.body);
  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }

  const user = {
    id : users.length + 1,
    name : req.body.name,
    password : req.body.password,
    gender : req.body.gender,
    birthdate : req.body.birthdate,
    age : req.body.age,
    country : req.body.country,
    phone : req.body.phone
  }

  users.push(user);
  var temp = JSON.stringify(users);
  console.log(typeof(temp));
  fs.writeFile("./data.json", JSON.stringify(users), "utf-8", (error) => {
    if(error){
      console.log(error);
    }else{
      console.log("Writing file successful...");
    }
  });
  res.send(user);
});

// To update user with id
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("User does not exist!");
    const { error } = validateData(req.body);
    if(error){
      res.status(400).send(error.details[0].message);
      return;
    }
  
    // Update data
      user.name = req.body.name;
      user.password = req.body.password;
      user.gender = req.body.gender;
      user.birthdate = req.body.birthdate;
      user.age = req.body.age;
      user.country = req.body.country;
      user.phone = req.body.phone;
  
      fs.writeFile("./data.json", JSON.stringify(user), "utf-8", (error) => {
        if(error){
          console.log(error);
        }else{
          res.send(user);
          console.log("Updated file successfully...");
        }
      }); 
});

// Delete user from id
app.delete('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if(!user) return res.status(404).send("User does not exist!");

  const index = users.indexOf(user);
  users.splice(index, 1);
  fs.writeFile("./data.json", JSON.stringify(users), "utf-8", (error) => {
    if(error){
      console.log(error);
    }else{
      console.log("Deleted data successfully...");
    }
  });
  res.send(user);
});

app.listen(80, ()=>{
  console.log("Listening on port 80...");
});

function validateData(user){
  const schema = Joi.object().keys({

    name : Joi.string().required(),
    password : Joi.string().required(),
    gender : Joi.string().required(),
    birthdate : Joi.string().required(),
    age : Joi.string().required(),
    country : Joi.string().required(),
    phone : Joi.string().required()

  });
  return Joi.validate(user, schema);
}