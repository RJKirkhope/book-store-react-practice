import React from 'react';
import './App.css';

function Footer(){
  return(
    <div className="footer">
      <p>The Json data used to build this app was pulled from a public github repo, it can be found 
      <a id="github-reference" href="https://github.com/benoitvallon/100-best-books"> Here.</a>
      </p>
    </div>
  )

}

export default Footer