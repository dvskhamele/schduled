import React, { useState, createContext } from 'react';
import './App.css';
import ItemList from './ItemList';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import Home from './Home';

export const itemContext = createContext(null);
function App() {

  const [obj, setObj] = useState([]);

  return (
    <div className="App">

      <Switch>
        <itemContext.Provider value={{ obj, setObj }}>
          <Route exact path="/" component={Form} />
          <Route exact path="/home" component={Home} />
        </itemContext.Provider>
      </Switch>

    </div>
  );
}

export default App;
