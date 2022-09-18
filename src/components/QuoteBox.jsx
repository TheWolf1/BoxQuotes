import React, {useState} from 'react'

const QuoteBox = ({ramdomQuote,ramdomColor,ramdomAll}) => {


  const styles = {
    color:ramdomColor
  } 
  return (
    <div className='card' style={styles}>
      <div className="card-icon">
      <i className="fa fa-quote-left" aria-hidden="true"></i>
      </div>
      <div className="card-body">
        <div className="card-quote">
        <p>"{ramdomQuote.quote}"</p>

        </div>
        
        <div className="card-author">
            <h3>- {ramdomQuote.author}</h3>
        </div>

        <div className="card-bottom">
            <button onClick={ramdomAll} style={{backgroundColor:ramdomColor}} >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
        </div>
    </div>
  )
}

export default QuoteBox