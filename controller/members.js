var db = require('mysql')

// Create Member
exports.create_member = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `INSERT INTO members (phoneno, name, address, avalability, designation, gender, martial_status, dob, emgcontact, email, salary, joiningdate, departuredate, medical_allowance, academics_qualifications, conveyance, accomadation_allocated) VALUES('${req.body.phoneno}', '${req.body.name}', '${req.body.address}', '${req.body.avalability}', '${req.body.designation}', '${req.body.gender}', '${req.body.martial_status}', '${db.Types.DATE.valueOf(req.body.dob)}', '${req.body.emgcontact}', '${req.body.email}', '${req.body.salary}', '${req.body.joiningdate}', '${req.body.departuredate}', '${req.body.medical_allowance}', '${req.body.academics_qualifications}','${req.body.conveyance}','${req.body.accomadation_allocated}' )`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}
// Read Members
exports.get_members = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `SELECT * FROM members`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}

// Read Specific User 
exports.get_member = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `SELECT * FROM members WHERE phoneno = ${req.params.id}`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}


// Update Member
exports.update_member = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `UPDATE members SET name = '${req.body.name}', address ='${req.body.address}' , avalability = ${req.body.avalability}, designation = '${req.body.designation}', gender = '${req.body.gender}', martial_status ='${req.body.martial_status}', dob = '${req.body.dob}', emgcontact = '${req.body.emgcontact}', email = '${req.body.email}', salary ='${req.body.salary}', joiningdate = '${req.body.joiningdate}' ,       departuredate =  '${req.body.departuredate}' , medical_allowance = ${req.body.medical_allowance}, academics_qualifications =  '${req.body.academics_qualifications}', conveyance = ${req.body.conveyance}, accomadation_allocated = ${req.body.accomadation_allocated}  WHERE phoneno = '${req.params.id}'`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}

// Delete Member
exports.delete_member = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `DELETE FROM members WHERE phoneno = ${req.params.id}`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}

