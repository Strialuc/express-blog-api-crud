// importo express nel file 

const express = require("express");
const app = express();
const port = 3000;

//importo istanza rotte
const rottePosts = require('./routes/posts')

//assets statici di expressjs (middleware)

app.use(express.static('public'));

// rotta path "home"

app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
});

//istanza rotte posts
app.use('/posts', rottePosts)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})