import React from 'react';

const About = () => {
  return (
    <div className="bg-bgColor py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-5xl font-serif font-bold text-center mb-10 text-gray-800">Welcome to OB&S</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At OB&S, we're dedicated to bringing you the finest selection of authentic books, free from piracy and packed with literary brilliance. Discover timeless classics, contemporary bestsellers, and niche treasures.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">A Reader's Community</h2>
            <p className="text-gray-600 mb-4">
              OB&S is more than just a bookstore. It's an immersive experience for book lovers everywhere. Engage with fellow readers, attend virtual events, and dive deep into discussions about your favorite books and authors.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">Genuine Quality</h2>
            <p className="text-gray-600 mb-4">
              With OB&S, you can trust that you're getting the real deal every time you shop. Our books are sourced with integrity, ensuring you receive genuine literature every time.
            </p>
          </div>
        
          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">Join Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Celebrate the joy of reading and explore the endless possibilities that await within the pages of a book. Welcome to OB&S - where genuine books meet unbeatable prices!
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">What We Do</h2>
            <p className="text-gray-600 mb-4">
              At OB&S, we curate an extensive collection of books across various genres to cater to diverse interests. From fiction to non-fiction, from mystery to romance, we have something for every reader.
            </p>
            <p className="text-gray-600 mb-4">
              We also prioritize customer satisfaction by providing exceptional service and ensuring that every purchase is a delightful experience. Whether you're browsing our online store or visiting our physical location, you'll find friendly staff ready to assist you in finding the perfect book.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">Our Values</h2>
            <p className="text-gray-600 mb-4">
              At OB&S, integrity, authenticity, and community are at the core of everything we do. We believe in fostering a love for reading while maintaining transparency and honesty in our operations.
            </p>
            <p className="text-gray-600 mb-4">
              We strive to create a welcoming environment where readers of all backgrounds can come together to share their passion for literature and engage in meaningful discussions.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-4xl font-serif font-bold text-gray-800">Location</h2>
          <p className="text-xl text-gray-700 font-semibold mt-4">
            J-Block Boys Hostel, VIT Vellore Location, Imaginary City, our store has been recognized by multiple prestigious organizations for our commitment to literature and customer satisfaction. We're proud recipients of the Fictional Bookstore Excellence Award and the Literary Integrity Prize.
          </p>
        </div>

        <div className="mb-8">
          <iframe 
            title="J-Block Boys Hostel, VIT Vellore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4068653992343!2d79.13937931489694!3d12.972571420563887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bace361ee35ae13%3A0x67de9377c84ed2c2!2sJ%20Block%20Boys%20Hostel%2C%20VIT%20Vellore!5e0!3m2!1sen!2sin!4v1660775839357!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;