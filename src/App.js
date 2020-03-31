import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
state={
  error:null,
  isLoaded:false,
  books:[],
}

componentDidMount(){
  fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json")
  .then(res => res.json())
    .then(
      (res) => {
        this.setState({
          isLoaded: true,
          books: res,
          search: "",
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
      }

  receiveFilter = (event) => {
    this.setState({search: event})
    }

render() {
  const { error, isLoaded, books } = this.state;

  let filteredBooks = books.filter(
    (book) => {
      return book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <div>
        <Header />
        <div className="App-body">
          <div className="search">
            <span className="search-text">
              <h4>Search For A Book</h4>
            </span>
            <Filter receiveFilter={this.receiveFilter}/>
          </div>
          <div className="book-list">
            {filteredBooks.map((book,i) => (
            <div className="book-tile" key={i}>
              <img className="book-img" src={"./" + book.imageLink} alt="" />
              <h4>{book.title}</h4>
              <h6>Written By: {book.author}</h6>
              <h6>Published: {book.year}</h6>
              <a href={book.link} target="blank">Learn more about this book.</a>
            </div>
            ))}
          </div>
        </div>
          <Footer />
      </div>
    );
  }
}
}

export default App;
