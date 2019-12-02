var router = require('express').Router();
var members = require('../controller/members')

// Create Member
router.post('/add-member', members.create_member);

// Update Member
router.post('/update-member', members.update_member);


// Read Member
router.post('/update-member', members.get_members);

// Delete Member
router.post('/delete-member', members.delete_member);


module.exports = router