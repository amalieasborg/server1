const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Hello, Express!');
});

app.use(express.json());

app.post('/jsonData',(req,res)=>{
    const data=req.body;
    res.json({
        name: data.name,
        age: data.age,
    });
    console.log(data);
});

app.get('/hello/:name',(req,res)=>{
    const name=req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
});
