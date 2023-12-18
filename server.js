///*****DEPENDENCIES
//Bring thing from libraries and ither files
//***** */

const express = require('express')

///******Create Express App object */
///Center of express universe

const app = express()

//*****Middleware*/



///**** ROUTES */
// Which function should run for different (method/url)pairs
//methods: GET , POST PUT, DELETE
//url: anyhtingafter the domain so xyz.com/cheese -> url: /cheese

// a GET request to the ROOT url or "/" xyz.com/ => "/"
//app.get(url, function)
//function: (request, response)
//req(request): an object with details abut the request
//re (response): an object with functions to send the respinse
// app.get("/", (req, res)=>{
 //res.send(ssomething) will send the response base on the input
//     res.send("<h1>Hello World</h1>")
// }) 
app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
   res.send(`Wow! Hello there, ${name}`)
})


app.get("/tip/:total/:tipPercentage", (req, res) => {
    const tip = req.params.tipPercentage
    const total = req.params.total
    const tip1= total * .2
   res.send(`${tip1}`)
})

app.get("/magic/:question", (req, res) => {
    const question = req.params.question
  const ans = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randRes = ans[Math.floor(Math.random() * ans.length)]
    res.send(` ${question}<h1>${randRes}</h1>`)
})







// *****************************
// TURNING ON SERVER LISTENER
// WILL TELL OUR APP TO LISTEN FOR REQUESTS
// ON A CERTAIN PORT
// *****************************
// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})



