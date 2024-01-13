import React, {useState, useEffect} from 'react';
import NoteCard from './components/noteCard';

const App = () => {
  const [cards, setCards] = useState(() => {
    const localData = localStorage.getItem('cards');
    return localData ? JSON.parse(localData) : [
      {title: "Note 1", content: "This is a note", width: 200, height: 200},
      {title: "Note 2", content: "This is another note", width: 300, height: 300},
    ];
  });

  const addCard = () => {
    const newCard = {title: "Title", content: "Content", width: 200, height: 200};
    setCards(prevCards => [...prevCards, newCard]);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);
  
  return (
    <div>
      {
        cards.map((card, index) => (
          <NoteCard key={index} cardData = {card} />
        ))
      }
      <button 
        onClick = {addCard}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
        }}>
        Add Card
      </button>
    </div>
  );
}

export default App;
