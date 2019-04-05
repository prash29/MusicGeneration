const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials",true);
  res.header("Access-Control-Allow-Origin: *");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/test',(request,response) => {
  response.json({text:"test works"})
})

app.post('/testPost',(request,response) => {

  //get the data sent from front end here
  var name = request.body.name;
  var data = request.body.data;
  console.log(name+ " " +data)

  var a = name+" "+data
  //send back response
  response.status(200).json({mydata:a})

})

//write get or post api here function here



  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
