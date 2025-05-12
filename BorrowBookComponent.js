import React, { useState } from 'react';

const BorrowBookComponent = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleBorrow = (e) => {
    e.preventDefault();
    // Add your API call logic here to borrow the book
    console.log(`Borrowing book with ID: ${bookId} for user ID: ${userId}`);
  };

  return (
    <div className="borrow-book-container">
      <h2>Borrow a Book</h2>
      <form onSubmit={handleBorrow}>
        <div className="form-group">
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User  ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Borrow Book</button>
      </form>
    </div>
  );
};

export default BorrowBookComponent;
