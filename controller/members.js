var db = require('mysql')

// Create Member
exports.create_member = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `INSERT INTO members (uid, name, address, member_role) VALUES(${req.body.uid}, ${req.body.name}, ${req.body.address}, ${req.body.member_role})`;
     global.db.query(query, (err, result)=>{
          if (err) {
               res.status(500).send({success: false, message: err})
          }else{
               res.status(200).json({success: true, message: result})
          }
     })
}
// Read Member
exports.get_members = function (req, res) {
     res.header("Content-Type", "application/json");
     res.status(200).send({
          "success": true,
          "message": "Send All Members"
     })
}

// Update Member
exports.update_member = function (req, res) {
     res.header("Content-Type", "application/json");
     res.status(200).send({
          "success": true,
          "message": "Member Updated"
     })
}

// Delete Member
exports.delete_member = function (req, res) {
     res.header("Content-Type", "application/json");
     res.status(200).send({
          "success": true,
          "message": "Member Deleted"
     })
}

