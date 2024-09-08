import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate=useNavigate();
    function clickHandler(){
        //move to about page
        navigate("/about");
    }
  return (
    // learning to use useNavigate hook
    <div>
        <div>
      This is Labs Page
    </div>
    <button onClick={clickHandler}>move to about page</button>

    </div>
    
  )
}

export default Labs
