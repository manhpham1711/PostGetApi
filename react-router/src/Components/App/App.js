
import React, {Component} from 'react';
import './App.css';

import Home from '../Phan/Home';
import About from '../Phan/About';
import Posts from '../Phan/Posts';
import Post from "../Phan/Post";
import Add from "../Phan/Add";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
      return (
        <div className="App">
          <Router>
            <div>
              <nav>
                <ul>
                  <li> <Link to="/">Home</Link> </li>
                  <li> <Link to="/about">About</Link> </li>
                  <li> <Link to="/posts">Posts</Link> </li>
                  <li> <Link to="/add">Add</Link> </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/about"><About /> </Route>

                <Route exact path="/posts"> <Posts /></Route>

                <Route exact path="/add"> <Add /></Route>

                <Route exact path ="/"> <Home /> </Route>

                <Route path="/posts/:id"> <Post /></Route>
              </Switch>
            </div>
          </Router>

        </div>
      );
    }
}

export default App;
