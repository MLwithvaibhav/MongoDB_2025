db.Collection.find() //- Fetch all documents
db.Collection.find({qty:55}) 

db.Collection.find( { item: { $in: [ "small box", "Lisp" ]} } )