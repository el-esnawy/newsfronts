const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const signtoken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
    algorithm: "HS512",
  });

const createSendToken = (user, statusCode, res) => {
  const token = signtoken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);
  res.status(statusCode).json({
    status: "Success",
    token,
  });
};

exports.authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("Not Authorized for this action", 401));
    }
    next();
  };

exports.protect = catchAsync(async (req, res, next) => {
  //1- get the token and check if it exits
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) return next(new AppError("Forbidden Access", 403));
  //2- validate the token

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3-  check if the user exists in the DB
  const currentUser = await User.findById(decoded.id);
  if (!currentUser)
    return next(
      new AppError(
        "The account is no longer active or No user exits with these credentials",
        401,
      ),
    );

  //4- check if user changed password after token was issued
  if (currentUser.changedPasswodAfter(decoded.iat))
    return next(
      new AppError("Password receently changed, Please log in again", 401),
    );

  //5- Grant access and call next()

  req.user = currentUser;
  next();
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });

  createSendToken(newUser, 201, res);
});
