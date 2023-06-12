require('dotenv').config();
//exports
const route = require('./Routes/route');
const connectDB = require('./DataBase/db');
//variables
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// app set
app.set('view engine', 'ejs');
app.set('views', __dirname + '/Views');
app.set('layout', 'Layouts/layout');
//app use
app.use(express.static('/Public'));
app.use(expressLayouts);
app.use('/', route);

//port and db start

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(process.env.Port || 3000, console.log('server is running'));
	} catch (error) {
		console.log(error);
	}
};
start();
