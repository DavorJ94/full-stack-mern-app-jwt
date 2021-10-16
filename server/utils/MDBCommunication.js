const User = require("../models/User");

async function pushTokenAndUpdate(email, cookieRefreshToken, refreshToken) {
  const userFromDB = await User.findOne({ email });
  let updatedUserRefreshTokens = [];
  userFromDB.refreshTokens.forEach((token) => {
    if (token !== cookieRefreshToken) updatedUserRefreshTokens.push(token);
  });
  updatedUserRefreshTokens.push(refreshToken);

  await User.findOneAndUpdate(
    { email: email },
    {
      refreshTokens: updatedUserRefreshTokens,
    }
  );
}

async function removeRefreshToken(email, cookieRefreshToken) {
  const userFromDB = await User.findOne({ email });
  let updatedUserRefreshTokens = [];
  userFromDB.refreshTokens.forEach((token) => {
    if (token !== cookieRefreshToken) updatedUserRefreshTokens.push(token);
  });
  await User.findOneAndUpdate(
    { email: email },
    {
      refreshTokens: updatedUserRefreshTokens,
    }
  );
}

async function pushRefreshTokens(email, refreshToken) {
  await User.findOneAndUpdate(
    { email: email },
    {
      $push: { refreshTokens: refreshToken },
    }
  );
}

module.exports = { pushTokenAndUpdate, pushRefreshTokens, removeRefreshToken };
