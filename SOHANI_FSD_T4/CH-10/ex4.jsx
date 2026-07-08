// write a node js script using mongoose to performe the following operation on the movies collesction 
// 1)insert multiple movie dcuments 2) display all movies havin a rating greater than 8.5 3)display the title and rating 
// of the movie having the second highest movie 4)increase the rating of all action movies by 0.2
// 5)  count the total no of hindi movies 6) delete the movie having the "Jawan" db name:entertainment collection:Movie 

const mg = require('mongoose'); 
mg.connect("mongodb://127.0.0.1:27017/entertainment").then(()=>{console.log("success")}).catch((err)=>{console.error(err)}); 
mg.pluralize(null)
const movieSchema = new mg.Schema({
    title: String,
    director: String,
    genre: String,
    rating: Number,
    releaseyear: Number,
    language: String,
    active: Boolean
});
const Movie = mg.model('Movie', movieSchema, 'Movie');
const movies = [
    { title: "Jawan", director: "Atlee", genre: "Action", rating: 8.7, releaseyear: 2023, language: "Hindi", active: true },
    { title: "3 Idiots", director: "Rajkumar Hirani", genre: "Drama", rating: 9.2, releaseyear: 2009, language: "Hindi", active: true },
    { title: "KGF", director: "Prashanth Neel", genre: "Action", rating: 8.8, releaseyear: 2018, language: "Kannada", active: true },
    { title: "RRR", director: "S. S. Rajamouli", genre: "Action", rating: 9.0, releaseyear: 2022, language: "Telugu", active: true },
    { title: "Drishyam", director: "Nishikant Kamat", genre: "Thriller", rating: 8.6, releaseyear: 2015, language: "Hindi", active: true },
    { title: "Dangal", director: "Nitesh Tiwari", genre: "Drama", rating: 8.9, releaseyear: 2016, language: "Hindi", active: true },
    { title: "Bahubali", director: "S. S. Rajamouli", genre: "Action", rating: 8.5, releaseyear: 2015, language: "Telugu", active: true },
    { title: "Pushpa", director: "Sukumar", genre: "Action", rating: 8.4, releaseyear: 2021, language: "Telugu", active: true },
    { title: "Shershaah", director: "Vishnuvardhan", genre: "Drama", rating: 8.3, releaseyear: 2021, language: "Hindi", active: true },
    { title: "Zindagi Na Milegi Dobara", director: "Zoya Akhtar", genre: "Drama", rating: 8.8, releaseyear: 2011, language: "Hindi", active: true }
];

const performoperation= async()=>{
    try{
        await Movie.insertMany(movies);
        console.log(await Movie.find({rating:{$gt:8.5}}))
        console.log(await Movie.find({},{title:1,rating:1,_id:0}).sort({rating:-1}).skip(1).limit(1))
        console.log(
            await Movie.updateMany({genre:"Action"},{$inc:{rating:0.2}}))
        console.log(
            await Movie.countDocuments({language:"Hindi"}))
        console.log(
            await Movie.deleteOne({title:"Jawan"})
        )
    }
    catch(err){
        console.log(err)
    }
}
performoperation()