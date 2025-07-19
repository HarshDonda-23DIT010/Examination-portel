import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  // console.log(req.cookies);

  const token = req.cookies.AccessToken;

  if (!token) {
    return res.status(401).json({ error: 'No token. Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid or expired' });
  }
};
