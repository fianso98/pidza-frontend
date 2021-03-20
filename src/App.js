import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Commande from './pages/Commande';
import MagasinDetails from './pages/MagasinDetail'
import Admin from './pages/Admin'
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"><MainPage/></Route>
          <Route path="/signin"><Sign/></Route>          
          <Route path="/login"><Login/></Route>
          <Route path="/commande"><Commande/></Route>
          <Route path="/magasin/:id"><MagasinDetails /></Route>
          <Route path="/admin"><Admin /></Route>
          
      </Switch>
    </div>
  );
}

export default App;
