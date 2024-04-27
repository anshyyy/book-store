const mongoose = require("mongoose");
const { Schema } = mongoose;

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
      ISBN: "195153448",
      title: "Classical Mythology",
      author: "Mark P. O. Morford",
      yearOfPublication: 2002,
      publisher: "Oxford University Press",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "2005018",
      title: "Clara Callan",
      author: "Richard Bruce Wright",
      yearOfPublication: 2001,
      publisher: "HarperFlamingo Canada",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "60973129",
      title: "Decision in Normandy",
      author: "Carlo D'Este",
      yearOfPublication: 1991,
      publisher: "HarperPerennial",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0060973129.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0060973129.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0060973129.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "374157065",
      title: "Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
      author: "Gina Bari Kolata",
      yearOfPublication: 1999,
      publisher: "Farrar Straus Giroux",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "393045218",
      title: "The Mummies of Urumchi",
      author: "E. J. W. Barber",
      yearOfPublication: 1999,
      publisher: "W. W. Norton & Company",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "399135782",
      title: "The Kitchen God's Wife",
      author: "Amy Tan",
      yearOfPublication: 1991,
      publisher: "Putnam Pub Group",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0399135782.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0399135782.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0399135782.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "425176428",
      title: "What If?: The World's Foremost Military Historians Imagine What Might Have Been",
      author: "Robert Cowley",
      yearOfPublication: 2000,
      publisher: "Berkley Publishing Group",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "671870432",
      title: "PLEADING GUILTY",
      author: "Scott Turow",
      yearOfPublication: 1993,
      publisher: "Audioworks",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0671870432.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0671870432.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "679425608",
      title: "Under the Black Flag: The Romance and the Reality of Life Among the Pirates",
      author: "David Cordingly",
      yearOfPublication: 1996,
      publisher: "Random House",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0679425608.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0679425608.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0679425608.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "074322678X",
      title: "Where You'll Find Me: And Other Stories",
      author: "Ann Beattie",
      yearOfPublication: 2002,
      publisher: "Scribner",
      imageURLS: {
        small: "http://images.amazon.com/images/P/074322678X.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "771074670",
      title: "Nights Below Station Street",
      author: "David Adams Richards",
      yearOfPublication: 1988,
      publisher: "Emblem Editions",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0771074670.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0771074670.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0771074670.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "080652121X",
      title: "Hitler's Secret Bankers: The Myth of Swiss Neutrality During the Holocaust",
      author: "Adam Lebor",
      yearOfPublication: 2000,
      publisher: "Citadel Press",
      imageURLS: {
        small: "http://images.amazon.com/images/P/080652121X.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/080652121X.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/080652121X.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "887841740",
      title: "The Middle Stories",
      author: "Sheila Heti",
      yearOfPublication: 2004,
      publisher: "House of Anansi Press",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0887841740.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0887841740.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0887841740.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1552041778",
      title: "Jane Doe",
      author: "R. J. Kaiser",
      yearOfPublication: 1999,
      publisher: "Mira Books",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1552041778.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1552041778.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1552041778.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1558746218",
      title: "A Second Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series)",
      author: "Jack Canfield",
      yearOfPublication: 1998,
      publisher: "Health Communications",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1558746218.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1558746218.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1558746218.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1567407781",
      title: "The Witchfinder (Amos Walker Mystery Series)",
      author: "Loren D. Estleman",
      yearOfPublication: 1998,
      publisher: "Brilliance Audio - Trade",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1567407781.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1567407781.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1567407781.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1575663937",
      title: "More Cunning Than Man: A Social History of Rats and Man",
      author: "Robert Hendrickson",
      yearOfPublication: 1999,
      publisher: "Kensington Publishing Corp.",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1575663937.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1575663937.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1575663937.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1881320189",
      title: "Goodbye to the Buttermilk Sky",
      author: "Julia Oliver",
      yearOfPublication: 1994,
      publisher: "River City Pub",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1881320189.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1881320189.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1881320189.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "440234743",
      title: "The Testament",
      author: "John Grisham",
      yearOfPublication: 1999,
      publisher: "Dell",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0440234743.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0440234743.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "452264464",
      title: "Beloved (Plume Contemporary Fiction)",
      author: "Toni Morrison",
      yearOfPublication: 1994,
      publisher: "Plume",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0452264464.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0452264464.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "609804618",
      title: "Our Dumb Century: The Onion Presents 100 Years of Headlines from America's Finest News Source",
      author: "The Onion",
      yearOfPublication: 1999,
      publisher: "Three Rivers Press",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0609804618.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0609804618.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0609804618.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1841721522",
      title: "New Vegetarian: Bold and Beautiful Recipes for Every Occasion",
      author: "Celia Brooks Brown",
      yearOfPublication: 2001,
      publisher: "Ryland Peters & Small Ltd",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1841721522.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1841721522.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1841721522.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "1879384493",
      title: "If I'd Known Then What I Know Now: Why Not Learn from the Mistakes of Others? : You Can't Afford to Make Them All Yourself",
      author: "J. R. Parrish",
      yearOfPublication: 2003,
      publisher: "Cypress House",
      imageURLS: {
        small: "http://images.amazon.com/images/P/1879384493.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/1879384493.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/1879384493.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "61076031",
      title: "Mary-Kate & Ashley Switching Goals (Mary-Kate and Ashley Starring in)",
      author: "Mary-Kate & Ashley Olsen",
      yearOfPublication: 2000,
      publisher: "HarperEntertainment",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0061076031.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0061076031.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0061076031.01.LZZZZZZZ.jpg",
      },
    },
    {
      ISBN: "439095026",
      title: "Tell Me This Isn't Happening",
      author: "Robynn Clairday",
      yearOfPublication: 1999,
      publisher: "Scholastic",
      imageURLS: {
        small: "http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg",
        medium: "http://images.amazon.com/images/P/0439095026.01.MZZZZZZZ.jpg",
        large: "http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg",
      },
    },
  ];

  for (const bookData of booksData) {
    const book = new Book(bookData);
    book.ratings = Math.floor(Math.random() * (6 - 1) + 1); // Generate random ratings
    book.price = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    await book.save();
    console.log(`Inserted book with ISBN ${book.ISBN}`);
  }
}

// Replace 'your_database_connection_string' with your MongoDB connection string
// insertBooks()

module.exports = Book;
