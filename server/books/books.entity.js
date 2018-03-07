var mongoose = require('mongoose');
console.log("inside book entity")
// defining template (mongoose schema) for storing user credentials in our database
var booksSchema = mongoose.Schema({
      bookname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Books', booksSchema, 'books');
// 'books' is the name of our collection in database 'library'
