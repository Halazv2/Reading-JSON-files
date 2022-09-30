const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllusers = (req, res, next) => {
  conn.query("SELECT * FROM user", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.sign_up = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.campus,
    req.body.class,
    req.body.level,
    req.body.email,
    req.body.password,
  ];
  conn.query(
    "INSERT INTO user (firstName, lastName, campus, class, level, email, password) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: 201,
        message: "User created successfully",
        data: data,
      });
    }
  );
};

exports.login = (req, res, next) => {
  if (!req.body) {
    return next(new AppError("No user found", 404));
  }
  conn.query(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [req.body.email, req.body.password],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      if (data.length > 0) {
        res.status(200).json({
          status: "success",
          data: data,
        });
      } else {
        return next(new AppError("user does not exist please try again", 404));
      }
    }
  );
};

exports.getuser = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No user id found", 404));
  }
  conn.query(
    "SELECT * FROM user WHERE id = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.updateuser = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No user id found", 404));
  }
  conn.query(
    "UPDATE user SET status='completed' WHERE id=?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "user updated!",
      });
    }
  );
};

exports.deleteuser = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No user id found", 404));
  }
  conn.query(
    "DELETE FROM user WHERE id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "user deleted!",
      });
    }
  );
};
