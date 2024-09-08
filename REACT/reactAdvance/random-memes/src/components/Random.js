import React from 'react';
import { useGif } from '../hooks/useGif.js';
import Spinner from './Spinner';


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export const Random = () => {
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
    // api ko call useEffect mein krte hai
    //   axios another for making http request. We can call api using fetch but axios is also used for same purpose
    //   axios is also a secured method. In fetch output of fetch is required to be parsed but in axios it is not required 

    //     async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     //axios returns a promise
    //     //random gif islia aa rhi hai kyuki random gif ki api call kr rhe hai
    //     const { data } = await axios.get(url);
    //     const imageSource = data.data.images.downsized.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);
    const { gif, loading, fetchData } = useGif();

    return (
        <div className='w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
            <h1 className='text-3xl uppercase underline font-bold mt-[15px]'>A RANDOM GIF</h1>
            {
                loading ? <Spinner /> : (<img src={gif} alt='ImageofGif' width={450} />)
            }
            <button className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[15px]' onClick={fetchData}>GENERATE</button>
        </div>

    )
};
