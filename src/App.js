import Error404 from "containers/errores/Error404";

import Home from "containers/pages/Home"; 
import About from "containers/pages/blog/About";
import Contact from "containers/pages/blog/Contact";

import Blog from "containers/pages/blog/Blog";
import BlogPost from "containers/pages/blog/Blog_post";
import BlogCategory from "containers/pages/blog/categories/BlogCategory";

import Search from "containers/pages/Search";

import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import store from "store";




function App() {
  return (
    <Provider store={store}>
    <Router>
    <Routes>
      {/* Ruta de error */}
      <Route path='*' element={<Error404/>} />
    
      <Route path='/' element={<Home/>} />

      <Route path='/about' element={<About/>} />
    
      <Route path='/contact' element={<Contact/>} />

      <Route path='/Blog' element={<Blog/>} />

      <Route path='/Blog/post/:slug' element={<BlogPost/>} />

      <Route path='/Blog/category/:category_id' element={<BlogCategory/>} />

      <Route path='/search/:term' element={<Search/>} />


    </Routes>
    
    </Router>
  
    </Provider>
  );
}

export default App;
