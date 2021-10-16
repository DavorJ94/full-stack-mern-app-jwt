const { Router } = require("express");
const {
  POST_SIGN_UP,
  POST_LOGIN,
  LOGOUT_POST,
  VERIFY_TOKEN_POST,
} = require("./controllers");
const router = Router();

router.post("/signup", POST_SIGN_UP);
router.post("/verifytoken", VERIFY_TOKEN_POST);
router.post("/login", POST_LOGIN);
router.post("/logout", LOGOUT_POST);

module.exports = router;
