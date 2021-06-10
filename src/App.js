import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Post from './components/PostContent/Post';
import Form from './Form/Form';
import Bio from './components/BioForm/Bio';
import Add from './components/AddPost/add';
import PostBio from './components/SinglePerson/Post';
//import { useSelector } from 'react-redux';
//import { useSelector } from 'react-redux';

function App() {
  //export const user = useSelector(state => state.users)
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
        <Route exact path="/post/:username">
          <PostBio />
        </Route>

      </Switch>
    </div>

  );
}

export default App;
