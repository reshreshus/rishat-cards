import React from 'react';
import './scss/main.scss';

import Card from './components/Card';

const card = {
  "title": "I am a card",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, totam. Fugiat iste eveniet quas quisquam similique perspiciatis voluptatum dicta cum!",
  "img": "horus_sign.png"
}
function App() {
  return (
      <div className="container">
          <Card card={card}/>
      </div>
  );
}

export default App;
