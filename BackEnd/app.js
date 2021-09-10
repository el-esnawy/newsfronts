const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const AppError = require("./util/AppError");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const articleRouter = require("./Routes/articleRouter");
const dotenv = require("dotenv");

dotenv.config();

var cors = require("cors");

const app = express();
app.use(cors());

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try again in a while",
});

app.use("/api", limiter);

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(
  express.json({
    limit: "10kb",
  }),
);

app.use(mongoSanitize());

app.use(xssClean());

app.use("/api/v1/", articleRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FrontEnd/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "FrontEnd", "build", "index.html")),
  );
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING...");
  });
}
app.all("*", (req, res, next) => {
  next(new AppError(`Can't Find ${req.originalUrl} on this Server!`, 404));
});

module.exports = app;
