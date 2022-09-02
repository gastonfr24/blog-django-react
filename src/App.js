import Home from "containers/pages/Home"; 
import Error404 from "containers/errores/Error404";

import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Provider>
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
