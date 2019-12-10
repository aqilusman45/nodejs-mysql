var router = require('express').Router();
var members = require('../controller/members')

// Create Member
router.post('/add-member', members.create_member);

// Update Member
router.post('/update-member/:id', members.update_member);

// Read Member
router.get('/get-member/:id', members.get_member);


// Read Members
router.get('/get-members', members.get_members);

// Delete Member
router.post('/delete-member/:id', members.delete_member);


module.exports = router