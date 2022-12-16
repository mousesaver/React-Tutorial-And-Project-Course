import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'



// JSX rule
// return single element
// div / section / article or <>
// use camelCAse for html attributes
// className instead of class
// close every element
// formatting return ()
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Greeting2 = () => {
//   // hard to use for multipline
//   return React.createElement('h1', {}, "hello world")
// }
// const Person = () => <h2>John Dow</h2>
// const Message = () => {
//   return <p>this is my message</p>
// }

function BookList() {
  return (
    <section className="booklist">
      {/* <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        {/* <p>When the browser loads a webpage, it takes in all the information about what needs to be displayed on the page, and creates a bunch of Javascript objects that represent the elements on the page. These objects mirror the html hierarchy, where the </p> */}
      {/* </Book> */}
      {/* <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} /> */} 
      {displayBooks}
    </section>
  )
}

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => {
//   return (
//     <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"></img>
//   )
// }
// const Title = () => {
//   return (
//     <h1>I Love You to the Moon and Back</h1>
//   )
// }

// const Author = () => {
//   return (
//     <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Amelia Hepworth</h4>
//   )
// }
const books = [{
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
  img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
},
{
  author: "Shannon Olsen",
  title: "Our Class is a Family",
  img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWU5yBZRvWsgERK68-659gTcplWQL07YM4PY6HyVnGNsBb4LnT"
},
{
  author: "Rush Limbaugh",
  title: "Radio's Greatest of All Time",
  img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/616wn8i6eTL._AC_UL600_SR600,400_.jpg"
}]
// const author = "Amelia Hepworth"
// const title = "I Love You to the Moon and Back"
// const img = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"

const Book = (props) => {
  // console.log(props)
  const {author, title, img} = props

  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert("hello world")
  }

  const complexEmxample = (author) => {
    console.log(author)
  }

  return (
    <article className="book" onMouseOver={() => {
      console.log(author)
    }}>
      
      <img src={img}></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexEmxample(author)}>more complex example</button>
      {/* {props.children} */}
      {/* <p>{let x = 2}</p> */}
      {/* <p>{6 + 6}</p> */}
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
  )
}
const displayBooks = books.map((book, i) => {
  return <Book {...book} key={`book-${i}}`}/>
})
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)