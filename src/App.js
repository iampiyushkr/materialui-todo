//import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Detail } from './component/todoDetail';
import { Todoinp } from './component/Todoinput';

function App() {
  return (
    <div className="App">
       <Link to="/todo">
          Todo
        </Link>
      <Switch>
        
        <Route exact path="/todo/:id">
            <Detail/>
        </Route>
        <Route exact path="/todo">
          <Todoinp/>

        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
