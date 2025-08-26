db.Collection.insertOne(
  {
    name: "Vaibhav",
    age: 19,
    city: "Delhi",
    hobbies: ["football", "music", "coding"]
  },
  {
    writeConcern: { w: 1 }
  }
)


try {
   db.Collection.insertMany( [
      { _id: 10, item: "large box", qty: 20 },
      { _id: 11, item: "small box", qty: 55 },
      { _id: 12, item: "medium box", qty: 30 }
   ] );
} catch (e) {
   print (e);
}