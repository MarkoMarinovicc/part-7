import React from "react";
import { useParams } from "react-router-dom";

const AnecdoteSingle = ({ anecdotes }) => {
  const id = parseInt(useParams().id);
  const anecdoteById = anecdotes.filter((a) => {
    return a.id === id;
  });
  console.log("id", id);
  console.log(anecdotes);

  console.log(anecdoteById);
  if (!anecdoteById) {
    return <p>Anecdote not found.</p>;
  }
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <span>{anecdoteById[0].author}</span>
      <span>{anecdoteById[0].content}</span>
      <span>{anecdoteById[0].votes}</span>
      <span>{anecdoteById[0].info}</span>
    </div>
  );
};

export default AnecdoteSingle;
