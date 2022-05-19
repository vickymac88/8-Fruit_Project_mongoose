// Require
const mongoose = require("mongoose");

// Connection
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

// Fruit Schema
const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!",
});

// fruit.save();

// Person Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Descent Fruit",
});

mango.save();

Person.updateOne({ name: "John" }, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pinapple,
// });

// person.save();

// To Insert Many

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 4,
//   review: "The best fruit",
// });

// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 4,
//   review: "Weird texture",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// To find Datas
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Update
// Fruit.updateOne(
//   { _id: "62034ede7f3798051e1ed460" },
//   { name: "Peaches" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document");
//     }
//   }
// );

// Delete
// Fruit.deleteOne({ name: "Peaches" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the document");
//   }
// });
