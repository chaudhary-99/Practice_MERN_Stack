import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import './App.css';
import { useContext,useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
    // Prop drilling: sending data from parent to Child. If last child require the value of prop then then passed value to intermediate component is useless. Ultimaltely, It would hampered the performanace of app
  // Context API:So the way of sending data directly to the last child can be using snapshot of data (Context is known as snapshot)
  //Rules for context Creation:
  //1. create Context()
  //2. context provider()
  //3. consume:-> useContext Hook is used
  // State drilling: sending data from child to parent


  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
        fetchBlogPosts();
  },[])
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
