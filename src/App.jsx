import { Route, Routes } from 'react-router-dom';
import './App.css'
import ComicList_Component from './Components/Comiclist';
import ComicDetails_Component from './Components/ComicDetails';

function App() {
  return(
    <Routes>
      <Route path="/" element={<ComicList_Component/>}>

      </Route>
      <Route path="/ComicDetails/:id" element={<ComicDetails_Component/>}>

      </Route>
    </Routes>
  );
}

export default App
