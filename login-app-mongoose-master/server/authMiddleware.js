const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token)
    return res.status(401).send({ error: true, message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    if (err)
      return res.status(401).send({ error: true, message: "Invalid Token" });
  }
}

module.exports = auth;
