db.Collection.find().limit(1) // limits the output to 1 document
db.Collection.find().limit(2) // limits the output to 2 document

db.Collection.find().skip(1) // skip first document
db.Collection.find().skip(2) // skip first two document

db.Collection.find().sort({ qty: 1})  // ascending order
db.Collection.find().sort({ qty: -1})  // descending order


//Building the database
db.Collection.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])



// Achieving Pagination using MongoDB find and limit

let no = 8;   // no. of records per page
let pageNo = 1;

db.blogs.find()
  .skip((pageNo - 1) * no)
  .limit(no);

// Example:
pageNo = 1;
db.blogs.find().skip(0).limit(8);

pageNo = 2;
db.blogs.find().skip(8).limit(8);



