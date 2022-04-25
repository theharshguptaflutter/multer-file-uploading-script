const express = require('express');
let port = process.env.PORT || 3000


const {userRoutes} = require('./src/users/user.routes');
const db = require("./db/connection");
const app = express();
mongoose = require("mongoose");
const bodyParser = require('body-parser');
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

//routes
userRoutes(app);

app.get("/", (req, res) => res.send("test api"));


app.listen(port, ()=> {
    console.log(`listening on *:${port}`);
});
db.establishConnection();
app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(r.route.path);
    }
});

