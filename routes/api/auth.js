express = require("express");
const router = express.Router();

//@route    GET api/auth
//@desc     Test auth
//@access   public

router.get("/", (req, res) => res.send("Auth route Works!"));

module.exports = router;
