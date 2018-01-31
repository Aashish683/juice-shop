const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors(corsOptions));

app.use(bodyParser.json());

app.route('/api/cats').get((req,res)=>{
  res.send({
      cats:[{name:'Lucy'},{name:'Luke'}]
  });
});

app.route('/api/cats/:name').get((req,res)=>{
  const requestedCatName=req.params['name'];
  res.send({name:requestedCatName});
});

app.route('/api/cats').post((req,res)=>{
    res.send(201,req.body);
})

app.route('api/cats/:name').put((req,res)=>{
    res.send(200,req.body);
});

app.route('api/cats/:name').delete((req,res)=>{
    res.sendStatus(204);
});

app.route('/rest/user/login').post((req,res)=>{
    if(req.body.email=='admin'&&req.body.password=='admin')
    return res.send({
        token:'Trial Run',
        bid:1234
    })
    else{
    //Sending an error
    return res.status(400).send({
        message:'Invalid email and password'
    })
    }

});


app.listen(4200,()=>{
    console.log('It is up');
});
