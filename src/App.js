import React from 'react';
import './scss/main.scss';

import CardList from './components/CardList';
import Header from './components/Header';

const card = {
  "title": "I am a card",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, totam. Fugiat iste eveniet quas quisquam similique perspiciatis voluptatum dicta cum!",
  "img": "horus_sign.png"
}
function App() {
  return (
    <React.Fragment className="Fragment">
      <Header />
      <div className="container">
          <CardList />
      </div>
    </React.Fragment>
      
  );
}

export default App;
