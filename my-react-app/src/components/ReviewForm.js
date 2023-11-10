import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    bookId: '',
    rating: 0,
    comment: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/reviews', formData);
      console.log('Review added:', response.data);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book:
        <input type="text" name="book" value={formData.book} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <label>
        Rating:
        <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <label>
        Comment:
        <textarea name="comment" value={formData.comment} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
