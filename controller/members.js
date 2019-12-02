// Create Member
exports.create_member = function (req, res) {
     res.header("Content-Type", "application/json");
     res.status(200).send({
          "success": true,
          "message": "Member Created"
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

