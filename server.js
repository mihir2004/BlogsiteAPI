import express from "express";
import axios from "axios";
import bodyParser from "body-parser"


const app = express ();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routing pages together



app.get("/", (req,res)=>{
    res.render("home.ejs");
})

app.get("/allposts",(req,res)=>{
    res.render("index.ejs")
})

//loads admin panel
app.get("/admin/:email", async (req,res)=>{
    console.log(req.params)
    try {
        const response = await axios.get(`${API_URL}/adminPosts/${req.params.email}`);
        res.render("admin.ejs", {posts:response.data});
    } catch (error) {
        res.status(500).json({message: "Error Fetching Posts"});
            
    } 
});

app.get("/resources",(req,res)=>{
    res.render("index.ejs")
})
app.get("/category",(req,res)=>{
    res.redirect("/")
})
app.get("/pricing",(req,res)=>{
    res.redirect("/");
})
app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})
app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

//new user signup

app.post("/api/newuser", async (req,res)=>{
    try {
        const result = await axios.post(`${API_URL}/newuser/signup`, req.body);
        console.log(result.data.message);
        res.redirect("/login");
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error});
    }
})

//user authentication i.e login

app.post("/api/login",async (req,res)=>{

    try {
        try {
            const result = await axios.post(`${API_URL}/Auth`, req.body);
            console.log(result.data.message);
            const redirecturl = `/admin/${req.body.email}`;
            console.log(redirecturl);
            res.redirect(redirecturl);
        } catch (error) {
            res.redirect('/login')
        }
    } catch (error) {
       return res.redirect('/signup')
    }
})
//new post

app.post("/api/posts", async (req,res)=>{
    console.log(req.params.email)
    try {
        const response = await axios.post(`${API_URL}/posts/${req.params.email}`,req.body)
        console.log(response.data);
        res.redirect(`/admin/${req.params.email}`)
    } catch (error) {
        
    }
})

app.get("/new", (req, res) => {
    res.render("modify.ejs", { heading: "New Post", submit: "Create Post" });
  });








app.listen(port,()=>{
    console.log(`Server Live at port : ${port}`);
})