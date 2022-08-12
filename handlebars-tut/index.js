const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
  }))
app.set('view engine', 'handlebars')




app.get('/',(req,res)=>{
    res.render('index',{
        title:"Home Page",
        name:"John Doe"});
  })



  app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'});
  })



  app.get('/if',(req,res)=>{
    res.render('if',
    {name:"john Doe",
    displayName:false


    })
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard',{isListenabled:false})
})
app.get('/each',(req,res)=>{
    res.render('each',{
      lists:[{
            items:[
                'onions','pumpkin','patatoes'
            ]},{
            items: ['apple','peach','pear']}
    ]
    })
})
app.get('/look',(req,res)=>{
    res.render('look',{
        people:['hashim']
    })
})


app.listen(3111,()=>{
    console.log('server is running');
})