const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

const morgan = require("morgan");
const logger = morgan("dev");
app.use(logger);

app.get("/api", (req, res) => {
	res.json({
		status: "Hello World",
		isCool: true,
	});
});
server.listen(5555, () => {
	console.log(`Express API listening on port 5555`);
});
