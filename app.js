const express = require("express")
const connectDB = require('./config/db')
const app = express()

// Connect to database
connectDB()

app.use(express.json({ extened: false }))

// Define Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("App is running in 'https://url-shortner-kmeyy.run-us-west2.goorm.io'");
});

