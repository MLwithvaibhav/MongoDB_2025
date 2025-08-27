db.Collection.find() //- Fetch all documents
db.Collection.find({qty:55}) 

db.Collection.find( { item: { $in: [ "small box", "Lisp" ]} } )

// AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// or
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

db.bios.findOne(
   {
     $or: [
            { 'name.first' : /^G/ },
            { birth: { $lt: new Date('01/01/1945') } }
          ]
   }
)