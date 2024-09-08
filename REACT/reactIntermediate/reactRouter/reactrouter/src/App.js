import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import Support from './components/Support';
import NotFound from './components/NotFound';
import About from './components/About';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader';

function App() {
  // reactRouter is a framework to navigate beween the pages without reloading and refreshing the page
  //This works on SPA Approach  which says about new pages donot open but same page dynamically loaded (changed)
  //Route is path 
  // to link path to browser is the work of browser Router
  //browserRouter is a tag
  return (
    <div className="App">
      {/* anchor tage of html is replace by link tag in react
      Link tag basically map text with route */}
      {/* NavLink tag link tag ka kaam too krta hii hai and bo jis bhi link pr hum jate hai usme actibe class ko add bhi kr deta hai */}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="*">Not Found Page</NavLink></li>
        </ul>
      </nav>
      <Routes>
        {/* Nesting ROuting-- Home page is parent and other  routes are child */}
        {/*To allow child element to render Outlet tag is used in  parent Route*/}
        {/* index is denoting that it is default Route */}
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} /> 
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />{/*Mention routes se different page kp render krne ke liye */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
