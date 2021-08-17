// imports
import React from 'react';
import { Link } from 'react-router-dom';

const Quote = () => {
  return (
    <div className="quote-container">
      <p className="quoteText"> 
        Mathematics is not about numbers, equations, computations, or algorithms:
        It is about understanding.
      </p>
      <cite className="cite">
        <Link to="https://es.wikipedia.org/wiki/William_Thurston" id="link">
        - William Paul Thurston  
        </Link>
      </cite>
    </div>
  )
}

export default Quote;
