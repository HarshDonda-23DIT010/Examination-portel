import jwt from 'jsonwebtoken';

/**
 * Generate JWT token
 */
export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};

/**
 * Send access token as an HTTP-only cookie
 */
export const sendTokenResponse = (res, user) => {
  const token = generateToken(user.id);

  res.cookie('access_token', token, {
    httpOnly: true,
    secure: false, 
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.status(200).json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
