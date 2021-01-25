const express = require("express");
const shortid = require("shortid")

const server = express();

server.use(express.json()); // teachews express how tro read JSON form req.body

let users = [
    {
        id: shortid.generate(), 
        name: "Jane Doe",
        bio: "Not Tarzan's Wife, another Jane",  
    },
    {
        id: shortid.generate(), 
        name: "Hussain Ali",
        bio: "Software Engineer",  
    },
];

server.post("/api/users", (req, res) => {   // POST new User
    const newUser= req.body; // needs express.json middleware to work
    newUser.id = shortid.generate()
    users.push(newUser)
    res.status(201).json(newUser)
})

server.get("/api/users", (req, res) => {    // GET users arr
    res.status(200).json(users)
})


server.get("/api/users/:id", (req, res) => {    // Get user by ID
    const id = req.params.id;
    const findId = users.find(h => h.id = id);

    users = users.filter(h => h.id !== id)
    res.status(200).json(findId)
})

server.delete("/api/users/:id", (req, res) => {     // DELETE user by user id
    const id = req.params.id;
    const deleteId = users.find(h => h.id = id);

    users = users.filter(h => h.id !== id);
    res.status(200).json(deleteId)
})

server.put("/api/users/:id", (req, res) => {        // PUT new changes to user by id
    const id = req.params.id;
    const changes = req.body;

    let found = users.find(h => h.id === id)

    if(found){
        found = Object.assign(found, changes) //found user
        res.status(200).json(found)
    } else {
        res.status(404).json({message: "User not found"})// did not find user with that id
    }
    
    
})


const PORT = 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`))