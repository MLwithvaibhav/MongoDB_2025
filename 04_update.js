db.Collection.find(
    {item : "small box" }
)

db.Collection.updateOne(
  { _id: 10, item: "small box" },   // condition (kis doc ko dhundhna hai)
  { $set: { item: "best box" } }    // update operation
)

db.Collection.updateOne(
  { _id: 11 },
  { $set: { item: "best box" },
     $currentdate: { lastModified: true }
    }
) 
// id deke update karna 


db.Collection.findOne( { item : "best box"} )


db.Collection.find(
    {"qty": { $lt: 55 }}
)

db.Collection.updateMany(
  { qty: 55 },             // condition: qty exactly 55
  { $set: { item: "small pox" } }   // update operation
)
