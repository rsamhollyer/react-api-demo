const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

const morgan = require("morgan");
const logger = morgan("dev");
app.use(logger);

let number = 0;

app.get("/api", (req, res) => {
	res.json({
		status: "Hello Reacty Poo",
		isCool: true,
	});
});

app.get("/api/counter", (req, res) => {
	res.json({
		status: "Check",
		value: number,
	});
});
//Adding 1
app.post("/api/counter", (req, res) => {
	number++;
	res.json({
		status: "incremented",
		value: number,
	});
});

//Subtact 1
app.put("/api/counter", (req, res) => {
	number--;
	res.json({
		status: "decremented",
		value: number,
	});
});
// Reset to 0
app.delete("/api/counter", (req, res) => {
	number = 0;
	res.json({
		status: "reset",
		value: number,
	});
});

server.listen(5555, () => {
	console.log(`Express API listening on port 5555`);
});
