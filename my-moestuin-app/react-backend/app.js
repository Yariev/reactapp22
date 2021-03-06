var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
var getPlanten = require("./routes/planten");
var addPlant = require("./routes/plant");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", indexRouter);
// app.use("/planten", plantenRouter);
// app.use("/plant", plantRouter);

// app.get("/", (req, res) => {  // CHECK: FE index gaat naar planten.tsx, oke?
//   //res.send("root");
//   getPlanten(req, res);
// });

app.get("/planten", (req, res) => {
  getPlanten(req, res);
});

app.post("/plant", (req, res) => {
  addPlant(req, res);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
