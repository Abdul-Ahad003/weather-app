const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var bodyParser = require('body-parser')

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())


app.post('/api', async (req, res) => {

	const location = req.body
	console.log(location);
	const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location.searchvalue}&format=json&u=c`;
	const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.API_KEY,
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
	const response = await fetch(url, options);
	const result = await response.json();	
	console.log(result);
  	res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})