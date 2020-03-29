import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';

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
        console.log(res);
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
      <div className="Book-list">
        <div className="Book-search">
        Search For a Book
        <Filter receiveFilter={this.receiveFilter}/>
        </div>
        {filteredBooks.map(book => (
          <div className="Book-tag" key={book.id}>
            <h2>{book.title}</h2>
          </div>
        ))}
        </div>
    );
  }
}
}

export default App;
