import React from 'react'


const BooksForm = props => {

  return (
    <div>
      <button onClick={props.getBooks}>Get awesome {props.name} Books</button>
    </div>
  )
}
export default BooksForm;