const express = require('express');
const router = express.Router();

const School = require("..models/School");

router.post("/",  async (req, res)=>{
    const { name, address } = req.body;
    const { country, city, street, number } = address;

// VALIDATION
    const errors =  []

    !name || !country || !city || !street || !number
    ? errors.push({ validationError: "All fields must be filled" }) : name;
    
    !Number(number) ? errors.push({ validationError: "Address number is not a valid number" }) : number;

    if(!errors){
        School.find({})
        .then((schools)=>{
            const sameSchool = schools.filter((school)=> school.name === name)
    
            if(sameSchool){
                const sameCity = sameSchool.filter((school)=> school.address.city === city)

                if(sameCity){
                    errors.push({ validationError: "School name is already in this city" }) 
                    res.status(422).json(errors)
                } else {
                    School.create({ name, address })
                    .then((data)=>{ res.send(data) })
                }

            } else { 
                School.create({ name, address })
                .then((data)=>{ res.send(data) })
            }
        })
        .catch((err)=>{ 
            res.send(err) 
            res.status(422).json(errors)
        })
    }
});

module.exports = router;
