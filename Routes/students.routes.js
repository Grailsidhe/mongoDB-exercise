const express = require('express')
const router = express.Router();

const Student = require("../models/Student");
const School = require("../models/School");

// With promises
router.post("/students", (req, res)=>{
    const { firstName, lastName, age, registered, grades } = req.body;
    
    Student.create({ firstName, lastName, age, registered, grades })
        .then((data)=>{ res.send(data) })
        .catch((err)=>{ res.send(err) })
});

Students.findByIdAndUpdate('123456', { firstName: 'Monica' })

// ALTERNATIVE ASYNC AWAIT (NOT A PROMISE) - to use when there are too many .then
router.post("/", async (req, res)=>{
    const { firstName, lastName, age, registered, grades, school } = req.body;
    
    try {
        const student = await Student.create({ firstName, lastName, age, registered, grades, school });
        const updateSchool = await School.findByIdAndUpdate(school, { $push: {students: student._id } }, { new: true } )
        .populate("students");
// Gives all the students' objects
        
        res.send(updateSchool)
        } catch(err) {
          res.send(err)
        }
});

module.exports = router;