	const express = require('express');
	const mongoose = require('mongoose');
	const app = express();
	const Student = require("./models/Student");
	
// Fill out sensitive info in .env then connect to here
	mongoose.connect("CODE GIVEN BY HOUSTING DB")
	.then((result)=> console.log("Connected to MONGO ATLAS"))
	.catch((err)=>console.log(err))
	
	app.use(express.json());
	
// ROUTES
	app.use("/api", require(".routes/students.routes"));
	app.use("/api", require(".routes/schools.routes"));
	
	app.listen(5000, ()=>{
		console.log("Connected in Port 5000")
	});