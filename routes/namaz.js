var router = require('express').Router();
var namazes = require('../controller/namaz')

// Create namaz
router.post('/add-namaz', namazes.create_namaz);

// Update Member
router.post('/update-namaz/:id', namazes.update_namaz);

// Read Namaz
router.get('/get-namaz/:id', namazes.get_namaz);


// Read Namazes
router.get('/get-namazes', namazes.get_namazes);

// Delete Namaz
router.post('/delete-member/:id', namazes.delete_namaz);


module.exports = router