import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Main_Page from './components/main_page.js';
import Popup_page from './components/popup_page.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main_Page></Main_Page>}></Route>
      <Route path="/popup_page" element={<Popup_page></Popup_page>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
