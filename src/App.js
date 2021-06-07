import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Post from './components/PostContent/Post';
import Form from './Form/Form';
import Bio from './components/BioForm/Bio';
import Add from './components/AddPost/add';


function App() {
  return (

    <div className="App">
      <p>Hello world</p>
      <Header />
      <Switch>
        <Route exact path="/">
          <Post />

        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/bio">
          <Bio />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>

      </Switch>
    </div>

  );
}

export default App;
