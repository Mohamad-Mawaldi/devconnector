express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//@route    Post api/users
//@desc     Register User
//@access   public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),

    check("email", "PLease include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with a 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    console.log("req.body", req.body);
    res.send("User route Works!");
  }
);

module.exports = router;
