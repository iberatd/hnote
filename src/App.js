// import React from 'react';
import NoteCard from './components/noteCard';

const App = () => {

  const cards = [
    {title: "Note 1", content: "This is a note"},
    {title: "Note 2", content: "This is another note"}
  ];

  return (
    NoteCard(cards[0])
  );
}

export default App;
