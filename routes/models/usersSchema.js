var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
exports.Person = mongoose.model("Person", personSchema);