import React, {useState } from 'react';
import Spinner from './Spinner';
import {useGif} from '../hooks/useGif.js';

const Tag = () => {
   //const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     //tag ka support availbale hai islia tag likhne se ho rha hai
    //     //axios returns a promise
    //     const { data } = await axios.get(url);
    //     const imageSource = data.data.images.downsized.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    const [tag, setTag] = useState("car");
    const {gif,loading,fetchData}=useGif(tag);
   
    return (
        <div className='w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
            <h1 className='text-3xl uppercase underline font-bold mt-[15px]'>RANDOM {tag} GIF</h1>
            {
                loading ? <Spinner /> : (<img src={gif} alt='ImageofGif' width={450} />)
            }
            <input className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[5px] text-center' onChange={(event)=>{setTag(event.target.value)}} value={tag} />
            <button className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[15px]' onClick={fetchData}>GENERATE</button>
        </div>

    )



};

export default Tag;
