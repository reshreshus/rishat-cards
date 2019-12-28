import React from 'react';
import './scss/main.scss';

import Card from './components/Card';
import CardList from './components/CardList';

const card = {
  "title": "I am a card",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, totam. Fugiat iste eveniet quas quisquam similique perspiciatis voluptatum dicta cum!",
  "img": "horus_sign.png"
}
function App() {
  return (
      <div className="container">
          <CardList />

      </div>
  );
}

export default App;
