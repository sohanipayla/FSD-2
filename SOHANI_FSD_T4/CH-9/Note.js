/*Mongo DB

-open source
-no sql database

==>RDBMS          Vs        NOSQL
-fixed schema               dynamic schema

-not suitable for           suitable for
  hierarchical              hierarchical
  data storage              data storage

-vertical scaling            horizonatal scaling
                             (whenever you add server it is called horizonatal scaling)
  mysql,postqre              MongoDB,graphQL


  ==>RDBMS:relation database


  ==>MongoDB--->BSON(Binary json)

  ==> RDBMS      MongoDB
      Database==>Databse
      Table=====>collection
      Row=======>Document
      Column====>Field


 ==>Advantages
 -schema less
 -document orinted
 -scalibility
 -third party support
 -replication
  */


  /*installation
  cmd: mongod --version

  https://www.mongodb.com--->Products--->Community Edition--->Download Community--->MongoDB Community Server

  zip==>exe and dll 
  c:\program Files\MongoDB\server\8.0\bin
  system variable-->path-->edit-->c:\program Files\MongoDB\server\8.0\bin
   */






  /*in cmd
   1.  mongod --version

   2.  mongosh

   3. (in default cmd write: test>) showdbs

   4. db (check the database)

   5. (check for the collection(table))
      show collections

   6. switch database
       use databse_name

   7. making table
      databse_name.createCollection('student') 

   8. drop collection
     databse_name.collection_name.drop() 

   9. drop databse
      databse_name.dropDatabase() 

   10. rename collection name
      databse_name.collection_name.renameCollection('rename_collection_name')

   11. insert documents
       --->insertOne:
            databse_name.collection_name.insertOne({name:'xyz',rollno:23})
       --->insertMany:
            databse_name.collection_name.insertMany([{name:'pqr',age:20},{name:'abc',age:24}])

    12. find document
        --->databse_name.collection_name.find()
        --->databse_name.collection_name.find(query/filter/condition/projection)
               ex:=> filter  : db.students.find({name:'N1'})
                              output:[{ _id: ObjectId("6a38dc45e666c088238d65d5"),name: 'N1',age: 20,status: 'Active'}]

                  =>condition: db.students.find({},{name:1})  it means print only whose columns's name name
                              output:[
                                         { _id: ObjectId("6a38daa5e666c088238d65d2"), name: 'xyz' },
                                         { _id: ObjectId("6a38daf7e666c088238d65d3"), name: 'pqr' },
                                         { _id: ObjectId("6a38daf7e666c088238d65d4"), name: 'abc' }
                                     ]


                  => db.students.find({},{name:1,_id:0})
                       output:[{ name: 'xyz' },{ name: 'pqr' },{ name: 'abc' }]

                  => db.students.find({name:'N1'},{_id:0,age:false})
                      output: [ { name: 'N1', status: 'Active' } ]

    
    13.findOne
    -->database_name.collection_name.findOne({name:'N1'})

    14.limit
    -->database_name.collection_name.find().limt(3)

    15.skip
    -->database_name.collection_name.find().limit(1).skip(1)

    16.updateOne(filter,document,options)
    --->database_name.collection_name.updateOne({name:'N1'},{$set:{name:'n4'}})

    17.updateMany
    --->database_name.collection_name.updateMany({age:24},{$set:{age:90}})

    18.upsert:whenever you have passing the data it's not avaiable in collection when add the data
    --->database_name.collection_name.updateOne({age:20},{$set:{name:'Nupur'}},{upsert:true})
    

    19.delete document
    --->database_name.collection_name.deleteOne({name:'N2'})

    20.count
    --->database_name.collection_name.countDocuments({name:'N4'})
    --->database_name.collection_name.find({name:'Nupur'}).count()

    21.sort()
    --->database_name.collection_name.find().sort({age:1}) 
    when you age:1 it sort assecnding order and age:-1 it sort descending order

       */


   /*change mongoDB port  */


   /*Question:1
   create collection named employee having fields name,age, years of experince and ratings
   insert 5-10 random document
   1.find name of all employee having age greater than 25
   2.increase the years of experience for all the emploee by one
   3.arrange all the record in descending order of age
   4.show the name of employee whose the oldest employee among all the employees
   5.delete the record of the employee if the years of experience 5


   answer:

   mydb> db.createCollection('employee')
   
   mydb> db.employee.insertMany([{name:'x',age:20,exp:5,rating:9},{name:'y',age:28,exp:5,rating:10},{name:'z',age:30,exp:10,rating:9},{name:'p',age:22,exp:9,rating:9},{name:'q',age:40,exp:8,exp:8}])

    */