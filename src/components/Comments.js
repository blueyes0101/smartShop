import React from 'react';
import { useSelector } from 'react-redux';

const Comments = ({ productId }) => {
  const comments = useSelector((state) => state.comments.comments);
  const productComments = comments.filter(comment => comment.productId === productId);

  return (
    <div>
      <h4>Comments</h4>
      {productComments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {productComments.map((comment) => (
            <li key={comment.date}>
              <strong>{comment.author}</strong> ({comment.rating}/5)
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
