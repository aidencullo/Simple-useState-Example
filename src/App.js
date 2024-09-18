import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === sculptureList.length - 1) {
      return;
    }
    setIndex(a => a + 1);
  }

  function handlePrev() {
    if (index === 0) {
      return;
    }
    setIndex(i => i - 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNext}>
        Next
      </button>
      <button onClick={handlePrev}>
        Prev
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
