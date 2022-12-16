import React from 'react'

const Book = (props) => {
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

export default Book