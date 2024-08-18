import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined) {
    return res.status(401).json({ message: "UnAuthorized" });
  }

  const token = authHeader.split(" ")[1];
  console.log(token);
  // eslint-disable-next-line no-undef
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    req.user = payload;
    next();
  });
};

export default authMiddleware;
