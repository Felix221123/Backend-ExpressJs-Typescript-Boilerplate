import express from "express"
import cors from "cors";


// defining the express app
const app = express();


// using cors in app
app.use(cors());


// defining the port
// const port = process.env.PORT || "5500";
const port = process.env.PORT || "5500"


// using the listen callback func to log out port definition
app.listen(port , () => {
    console.log(`app is running at ${port}`);
})