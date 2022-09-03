import Home from "containers/pages/Home"; 
import Error404 from "containers/errores/Error404";
import Blog from "containers/pages/blog/Blog";
import BlogPost from "containers/pages/blog/Blog_post";

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
    
      <Route path='/Blog' element={<Blog/>} />

      <Route path='/Blog/post/:slug' element={<BlogPost/>} />

    </Routes>
    
    </Router>
  
    </Provider>
  );
}

export default App;
