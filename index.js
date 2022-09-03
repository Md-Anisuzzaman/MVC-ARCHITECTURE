const userRouter = require("./routes/users.route")
const productRouter = require("./routes/products.route")

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Request Not Found",
    });
});


app.listen(port, () => {
    console.log("Server runnng at port", port);
})