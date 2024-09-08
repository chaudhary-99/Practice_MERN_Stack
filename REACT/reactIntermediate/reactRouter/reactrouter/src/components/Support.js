import React from 'react'
import { useNavigate } from 'react-router-dom';
const Support = () => {
    const navigate=useNavigate();
    function clickHandler(){
        //move to Labs page
        navigate("/labs");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>
      This is Support Page
    </div>
    <button onClick={clickHandler}>move to Labs page</button>
    <button onClick={backHandler}>Go Back</button>

    </div>
  )
}

export default Support
