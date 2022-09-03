import Home from "containers/pages/Home"; 
import Error404 from "containers/errores/Error404";

import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import store from "store";

import { Card } from "components/Card";



function App() {
  return (
    <Provider store={store}>
    <Router>
    <Routes>
      {/* Ruta de error */}
      <Route path='*' element={<Error404/>} />
    
      <Route path='/' element={<Home/>} />
    
    </Routes>
    
    </Router>
  
    </Provider>
  );
}

export default App;
