const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const expiresIn = 60 * 60 * 48; 
  const token = jwt.sign({ userId: req.params.id }, 'secretKey', { expiresIn: expiresIn });
  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.params.id = decoded.userId; 
    next();
  });  
};

module.exports = {
  authenticateUser,
}; 