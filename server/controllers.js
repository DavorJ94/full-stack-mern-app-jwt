const User = require("./models/User");
const { handleErrors } = require("./utils/handleErrors");
const {
  pushTokenAndUpdate,
  pushRefreshTokens,
  removeRefreshToken,
} = require("./utils/MDBCommunication");
const { createToken, createRefreshToken } = require("./utils/createTokens");
const jwt = require("jsonwebtoken");

const POST_SIGN_UP = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = createToken(email);
    const refreshToken = createRefreshToken(email);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 30 * 1000,
      sameSite: "none",
      secure: true,
    });
    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      sameSite: "none",
      secure: true,
    });
    const user = await User.create({
      email,
      password,
      refreshTokens: refreshToken,
    });

    res.status(201).json({ user: user.email });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
};

const POST_LOGIN = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const cookieRefreshToken = req.cookies.jwtRefresh;
    const token = createToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    if (cookieRefreshToken) {
      await pushTokenAndUpdate(email, cookieRefreshToken, refreshToken);
    } else {
      await pushRefreshTokens(email, refreshToken);
    }

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 30 * 1000,
      sameSite: "none",
      secure: true,
    });
    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ user: user.email });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
};

const LOGOUT_POST = async (req, res) => {
  const refreshToken = req.cookies.jwtRefresh;
  const { email } = req.body;

  if (refreshToken) {
    await removeRefreshToken(email, refreshToken);
  }
  res.cookie("jwt", "", { maxAge: 1, sameSite: "none", secure: true });
  res.cookie("jwtRefresh", "", { maxAge: 1, sameSite: "none", secure: true });
  res.status(200).send("Logged out");
};

const VERIFY_TOKEN_POST = async (req, res) => {
  const refreshToken = req.cookies.jwtRefresh;

  if (!refreshToken)
    return res.status(403).json({ verified: false, email: "" });
  try {
    const user = await User.find({ refreshTokens: refreshToken });
    const currentUserEmail = user[0].email;
    const currentUserId = user[0]._id;

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err) => {
      if (err) {
        return res.status(403).json({ verified: false, email: "" });
      }
      const updatedToken = createToken(currentUserId);
      const updatedRefreshToken = createRefreshToken(currentUserId);
      await pushTokenAndUpdate(
        currentUserEmail,
        refreshToken,
        updatedRefreshToken
      );

      res.cookie("jwt", updatedToken, {
        httpOnly: true,
        maxAge: 30 * 1000,
        sameSite: "none",
        secure: true,
      });
      res.cookie("jwtRefresh", updatedRefreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
        sameSite: "none",
        secure: true,
      });
      return res.status(200).json({ verified: true, email: currentUserEmail });
    });
  } catch (err) {
    return res.status(403).json({ verified: false, email: "" });
  }
};

module.exports = { POST_SIGN_UP, POST_LOGIN, LOGOUT_POST, VERIFY_TOKEN_POST };
