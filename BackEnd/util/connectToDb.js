const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chalk = require("chalk");

const connectToDB = () => {
  dotenv.config();

  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD,
  );

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(chalk.blackBright.bgGreen.bold("DB Connection Successfull"));
    });
};
module.exports = connectToDB;
