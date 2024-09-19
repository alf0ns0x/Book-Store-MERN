import React, { useState, useEffect} from 'react';
import BookCards from '../components/BookCards';
const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Corrección aquí: el método `fetch` debe ser llamado primero
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 8))) // Guarda los datos en el estado
            .catch(error => console.error('Error:', error)); // Manejo de errores
    }, []);

  return (
    <div>
      <BookCards books={books} headLine="Other Books" />
      aaaaaaaaaa
    </div>
  );
};

export default OtherBooks;
