let express = require('express');
const PORT = 5000;
//SCREAMING_SNAKE_CASE

// make a server that can serve my static html css javascript.

let app = express();//make a server please!
//we need a line of code to serve our html css and js to the client
// this looks in our file directory for things to serve
let getRandomJoke = require('./modules/jokes')

// the request is localhost:5000/joke
//arrow functions, shorthand way of writing a function
app.get('/joke', (req, res) => {
console.log('got to /joke GET');
//good servers all ways respond
res.send(getRandomJoke());
});

app.use(express.static('server/public'));

//listen for connections on port 5000

app.listen(PORT, () => {
    console.log('app is running on:',PORT);
})