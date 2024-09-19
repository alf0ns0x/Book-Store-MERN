import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json()) // Add parentheses here
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error)); // Optional error handling
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map((book, index) => (
            <Card key={index} href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle} {/* Assuming your book object has a title */}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.authorName} {/* Assuming your book object has a description */}
              </p>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default Shop;
