import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';
//step1: create
export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    //data filling pending
    
    async function fetchBlogPosts(page=1) {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        console.log("Printing the final URL");
        console.log(url);
        try{
            const result=await fetch(url);         
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            

        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

   
    const value={
        loading,
        setLoading,
         posts,
         setPosts,
         page,
         setPage,
         totalPages,
         setTotalPages,
         fetchBlogPosts,
         handlePageChange,
    };
    //Snapshot of Data
    
    //STEP 2: Provider
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>

    
};

