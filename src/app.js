const express = require("express");
const app = express();
const ordersRouter = require("./orders/orders.router");

app.use(express.json()); 


app.use("/orders", ordersRouter);


app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(status).json({ error: message });
});

module.exports = app;