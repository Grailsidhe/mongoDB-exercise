const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myOwnSchema = new Schema({
    firstName: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number },
    registered: { type: Boolean, default: false }, // empty field will be set as false
    grades: { type: Array },
    class: { type: String },
    school: { type: Schema.Types, ObjectId, ref: "School" }
});

const Student = mongoose.model("Student", myOwnSchema);

module.exports = Student