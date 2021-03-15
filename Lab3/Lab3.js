db.getCollection("students").find({})

//Question 3
db.getCollection("students").insertOne(
{
    "name": "John",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"]
}
)

//Question 4
db.getCollection("students").find({"name": "John"})

//Question 5
db.getCollection("students").find({"_id": ObjectId("604379e9e7e9232e0361f1a8")})

//Question 6
db.getCollection("students").updateOne({},{$push:{"subjects":"Distributed Computing"}})

//Question 7
db.getCollection("students").insertMany([
{
    "name": "Smith",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computerarchitecture"],
    "isActive": true
},
{
    "name": "Jane",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computerarchitecture"],
    "isActive": true    
}
])

//Question 8
db.getCollection("students").updateOne({"name":"Smith", "isActive":true},{$push:{"subjects":"Distributed Systems"}})

//Question 9
db.getCollection("students").updateOne({"name":"John"},{$set:{"isActive":true}})
//OR
db.getCollection("students").updateOne({},{$set:{"isActive":true}})

//Question 10
db.getCollection("students").deleteOne({"name":"John"}) 
//OR
db.getCollection("students").deleteOne({})
