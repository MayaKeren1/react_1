import React from 'react'
import ReactDOM from 'react-dom';
//css
import './index.css';

import {data} from './books';
import SpecificBook from './Book';
import {greeting} from './testing/testing';

function BookList() {
  return(
    <section className='booklist'>
      {data.map((book)=>{
        const {img,title,auther}=book;
        return(
          <SpecificBook key={book.id} book={book}></SpecificBook>
        );
      })}
    </section>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'));