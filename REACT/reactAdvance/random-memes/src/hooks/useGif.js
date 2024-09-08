import {useState,useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
export function useGif(tag) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    async function fetchData() {
        setLoading(true);
        //tag ka support availbale hai islia tag likhne se ho rha hai
        //axios returns a promise
        const { data } = await axios.get(tag? (`${url}&tag=${tag}`):(`${url}`));
        const imageSource = data.data.images.downsized.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return{gif,loading,fetchData};
    
}
