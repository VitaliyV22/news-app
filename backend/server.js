const express = require("express");
const cors =require("cors")
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./Models");
const userRoutes = require("./Routes/userRoutes");
const newsletterRoutes = require('./Routes/newsRoutes');




//setting up your port
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//synchronizing the database and forcing it to false for no data loss
db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync");
});

//routes for the user API
app.use("/api/users", userRoutes);

//routes for the newsletter API
app.use('/api', newsletterRoutes);


//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
