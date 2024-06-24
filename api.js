import express, { application } from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;

let posts = [];
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const db = new pg.Client({
    user:"*******",
    host:"********",
    database:"*****",
    password:"********",
    port:5432
});

db.connect();

//new user signup

app.post("/newuser/signup",async (req,res)=>{
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    await db.query(
        "INSERT INTO users (name, email, password) VALUES ($1,$2,$3)",
    [newUser.name,newUser.email,newUser.password]);
    res.status(201).json(newUser)
})

// existing user auth

app.post("/Auth",async (req,res)=>{
    const credential = {
        email: req.body.email,
        password: req.body.password
    };
    const result = await db.query(
        "SELECT password FROM users WHERE email = ($1)",
        [credential.email]
    );
    
    if(result.rows.length==0){        
        res.status(401).json({message: "Email Not Found"});
    }
    else{
        const correctPassword = result.rows[0].password;
        if(correctPassword){
            if(correctPassword == credential.password){
                res.status(201).json({message: "LoggedIn"});
            }
            else{
                res.status(401).json({message: "WrongPassword"})
            }
        }
    }
  

})
// have to solve for edge cases now it only works for correct email and password

//admin api
//render all available posts
app.get("/adminPosts/:email", async (req,res)=>{
    console.log(req.params);
    const credential = {
        email: req.params.email,
    };
    console.log(credential);
    let result = await db.query(
        "SELECT p.id, p.title, p.content, p.author, p.created_at FROM posts p INNER JOIN users u ON p.blogId = u.id WHERE u.email = ($1);",
        [credential.email]
    );
    posts = result.rows;
    console.log(posts);
    res.json(result.rows);
})

//new post
app.post("/posts/:email", async (req,res)=>{
    console.log(req.params)
    const result = await db.query(
        "SELECT id FROM users WHERE email=($1)",[req.params.email]
    );
    const id=result.rows[0].id;
    const post = {
        blogId: parseInt(id),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };
    console.log(post.blogId);
    await db.query(
        "INSERT INTO posts (blogid, title, content, author) VALUES ($1,$2,$3,$4)",
        [post.blogId,post.title,post.content,post.author]
    );
    res.status(201).json(post)
});









app.listen(port,()=>{
    console.log(`API Live at port ${port}`);
})
