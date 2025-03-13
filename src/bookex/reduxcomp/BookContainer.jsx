import React from 'react'
import { buybook } from './bookAction';
import {connect } from 'react-redux';

const BookContainer = () => {
    // console.log(props);
  return (
    <div>
        <h1>Number of books : {props.books}</h1>
        <button onClick={props.dispatchBooks}>Buy Book</button>
        </div>
  )
}

const mapStateToProps=state=>{
    return{
        books:state.numOfBooks
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        dispatchBooks : ()=>dispatch(buybook())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(BookContainer)