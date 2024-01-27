const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("auth",authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token",token);
  if (token == null) {
    return res.sendStatus(401); 
  }

  jwt.verify(token, "process.env.ACCESS_TOKEN_SECRET", (err, decoded) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403); 
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticateToken;
