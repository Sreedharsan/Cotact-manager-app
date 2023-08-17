const express = require("express");
const router = express.Router();
const {getcontacts,
    createcontact,
    getcontact,
    updatecontact,
    deletecontact
} = require("../controllers/contactcontroller");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getcontacts).post(createcontact);
router.route("/:id").get(getcontact).put(updatecontact).delete(deletecontact);



module.exports = router;