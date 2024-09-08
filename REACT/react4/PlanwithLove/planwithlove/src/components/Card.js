
import React, { useState } from 'react';
const Card = ({tour,removeTour }) => {
    const {id, name, info, image, price}=tour;
    
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;
    // condition ? true : false
   
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    
    return (
        <div className='card'>
            <img src={image}  alt="here" className='image'></img>
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'> {price} </h4>
                    <h4 className='tour-name'> {name} </h4>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>
                        {readmore ? 'showless' : 'readmore'}
                    </span>
                </div>

            </div>

            <button className='btn-red' onClick={() => removeTour(id)}>Not Interested</button>

        </div>
    )
}

export default Card;
