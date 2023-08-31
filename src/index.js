import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './Books';
import Book from './Book';
//Booklists component
const Booklists =()=>{
  return(
  <><h1>Best seller books</h1>
  <section className='booklists'>
    {books.map((book, index)=>{
              return <Book {...book}  key={book.id} number={index}  />;
    })}
  </section>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklists />);