import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/Support");
    }
    return (

        <div>
            <div>
                This is ABout Page
            </div>
            <button onClick={clickHandler}>Move to Support Page</button>

        </div>

    )
}

export default About
