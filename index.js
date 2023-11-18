import Express from "express";
import dotenv from "dotenv";
import generateRoutes from "./routes/generate.js";

dotenv.config();

// instance of running server application
const app = Express();

// middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// static folder
app.use(Express.static('public'));


// routes
app.use(generateRoutes);

try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server Running on port ${port}`));
} catch (error) {
    console.log(error);
}

