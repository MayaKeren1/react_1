import React from "react";

const Book = (props) =>{
    console.log(props);
    const {img,title,auther}=props.book;
    const clickHandker=(e)=>{
      console.log(e);
      console.log(e.target);
       alert('hello world');
    }
    const complexExample=(auther)=>{
      console.log(auther);
    }
    return(
     <article className='book'onMouseOver={()=>{
        console.log(title);
     }}>
        <img
        src={img}
        alt=''/>
        <h1 onClick={()=>console.log(title)}>{title}</h1>
        <h4>{auther}</h4>
        <button type='button' onClick={clickHandker}>
          reference example
        </button>
        <button type='button' onClick={()=>complexExample(auther)}>
          more complex example
        </button>
      </article>
    );
  };

export default Book