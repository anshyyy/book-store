const mongoose = require("mongoose");
const { Schema } = mongoose;
const Notification = require("./notification");

// Define the book schema
const bookSchema = new Schema(
    {
      ISBN: {
        type: String,
        required: true,
        unique: true,
      },
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      yearOfPublication: {
        type: Number,
        required: true,
      },
      publisher: {
        type: String,
        required: true,
      },
      imageURLS: {
        small: String,
        medium: String,
        large: String,
      },
      ratings: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
       
      },
    },
    { timestamps: true }
  );

// Define the Book model
const Book = mongoose.model("Book", bookSchema);

// Function to generate random ratings
function generateRandomRatings() {
  const ratings = [];
  for (let i = 0; i < 10; i++) {
    ratings.push(Math.floor(Math.random() * (6 - 1) + 1)); // Random ratings between 1 and 5
  }
  return ratings;
}

// Function to insert data with random ratings
async function insertBooks() {
  const booksData = [
    {
      ISBN: "380728273",
      title: "Liberty Falling (Anna Pigeon Mysteries (Paperback))",
      author: "Nevada Barr",
      yearOfPublication: 2000,
      publisher: "Avon",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0380728273.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0380728273.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0380728273.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 13.99,
      description: "Mystery novel by Nevada Barr.",
    },
    {
      ISBN: "8433914545",
      title: "El Palacio de La Luna",
      author: "Paul Auster",
      yearOfPublication: 1996,
      publisher: "Anagrama",
      imageURLS: {
        small: "http://images.amazon.com/images/P/8433914545.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/8433914545.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/8433914545.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 12.49,
      description: "Novel by Paul Auster.",
    },
    {
      ISBN: "8484509141",
      title: "Mientras Escribo",
      author: "Stephen King",
      yearOfPublication: 2002,
      publisher: "Distribooks",
      imageURLS: {
        small: "http://images.amazon.com/images/P/8484509141.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/8484509141.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/8484509141.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 11.99,
      description: "Autobiography by Stephen King.",
    },
    {
      ISBN: "446606197",
      title: "Killer Market (Deborah Knott Mysteries (Paperback))",
      author: "Margaret Maron",
      yearOfPublication: 1999,
      publisher: "Warner Books",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0446606197.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0446606197.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0446606197.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 10.99,
      description: "Mystery novel by Margaret Maron.",
    },
    {
      ISBN: "771076002",
      title: "Remembering Peter Gzowski : A Book of Tributes",
      author: "EDNA BARKER",
      yearOfPublication: 2002,
      publisher: "Douglas Gibson Books",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0771076002.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0771076002.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0771076002.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 9.99,
      description: "Tribute book by Edna Barker.",
    },
    {
      ISBN: "771088191",
      title: "The Best Canadian Animal Stories: Classic Tales by Master Storytellers",
      author: "Muriel Whitaker",
      yearOfPublication: 1997,
      publisher: "McClelland & Stewart",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0771088191.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0771088191.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0771088191.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 14.99,
      description: "Anthology edited by Muriel Whitaker.",
    },
    {
      ISBN: "1559703237",
      title: "Trying to Save Piggy Sneed",
      author: "John Irving",
      yearOfPublication: 1996,
      publisher: "Arcade Publishing",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1559703237.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1559703237.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1559703237.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 11.49,
      description: "Short story collection by John Irving.",
    },
    {
      ISBN: "3596214629",
      title: "Herr Der Fliegen (Fiction, Poetry and Drama)",
      author: "Golding",
      yearOfPublication: 1954,
      publisher: "Fischer Taschenbuch Verlag GmbH",
      imageURLS: {
        small: "http://images.amazon.com/images/P/3596214629.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/3596214629.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/3596214629.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 9.99,
      description: "Novel by William Golding.",
    },
    {
      ISBN: "62770500",
      title: "Seattle Access",
      author: "HarperReference",
      yearOfPublication: 1993,
      publisher: "Access Press (HarperCollins)",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0062770500.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0062770500.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0062770500.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 14.99,
      description: "Guidebook to Seattle.",
    },
    {
      ISBN: "671847546",
      title: "REAL GUIDE: CALIFORNIA AND THE WEST COAST (The Real guides)",
      author: "LTD",
      yearOfPublication: 1993,
      publisher: "John Wiley & Sons Inc",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0671847546.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0671847546.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0671847546.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 13.99,
      description: "Travel guidebook.",
    },
    {
      ISBN: "60188731",
      title: "Bel Canto",
      author: "Ann Patchett",
      yearOfPublication: 2001,
      publisher: "HarperCollins Publishers",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0060188731.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0060188731.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0060188731.01.LZZZZZZZ.jpg",
      },
      ratings: 0,
      price: 12.99,
      description: "Novel by Ann Patchett.",
    },
  ];
  

  for (const bookData of booksData) {
    const book = new Book(bookData);
    book.ratings = Math.floor(Math.random() * (6 - 1) + 1); // Generate random ratings
    book.price = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    await book.save();
    console.log(await Notification.create({title:`A new Book : ${book.title} has been added into the database`}));
    console.log(`Inserted book with ISBN ${book.ISBN}`);
  }
}

// // Replace 'your_database_connection_string' with your MongoDB connection string
// insertBooks().then(()=>{
//   console.log("inserted")
// });

module.exports = Book;
