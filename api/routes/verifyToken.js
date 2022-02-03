const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers.token) {
    jwt.verify(
      req.headers.token.split(" ")[1],
      process.env.JWT_SECRET_KEY,
      (err, user) => {
        if (err) res.status(403).json("Invalid Token!");
        req.user = user;
        next();
      }
    );
  } else {
    return res.status(401).json("Authentication failed!");
  }
};

const verifyAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Permission denied!");
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Permission denied!");
    }
  });
};

module.exports = { verifyToken, verifyAuthorization, verifyAdmin };
