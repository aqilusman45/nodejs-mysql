var db = require('mysql')

// Create Namaz
exports.create_namaz = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `INSERT INTO namazes (nid, name, ntype, time, imam, muazzin, status ) VALUES('${req.body.nid}', '${req.body.name}', '${req.body.ntype}', '${req.body.time}', '${req.body.imam}', '${req.body.muazzin}', '${req.body.status}')`;
     global.db.query(query, (err, result) => {
         console.log(result);
         
          if (err) {
              console.log(err);
              
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}
// Read Namazs
exports.get_namazes = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `SELECT * FROM namazes`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}

// Read Namaz 
exports.get_namaz = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `SELECT * FROM members WHERE nid = ${req.params.nid}`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}


// Update Namaz
exports.update_namaz = function (req, res) { 
     res.header("Content-Type", "application/json");
     let query = `UPDATE namazes SET name = '${req.body.name}', ntype ='${req.body.ntype}' , time = ${req.body.time}, imam = '${req.body.imam}', muazzin = '${req.body.muazzin}' status = '${req.body.status}', WHERE nid = '${req.params.nid}'`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}

// Delete Namaz
exports.delete_namaz = function (req, res) {
     res.header("Content-Type", "application/json");
     let query = `DELETE FROM namazes WHERE nid = ${req.params.nid}`;
     global.db.query(query, (err, result) => {
          if (err) {
               res.status(500).send({ success: false, error: err })
          } else {
               res.status(200).json({ success: true, result: result })
          }
     })
}

