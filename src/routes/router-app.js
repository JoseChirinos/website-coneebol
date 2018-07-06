import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from '../components/router-list';
import Main from '../main/main';

class RouterApp extends Component {
  render(){
    return(
      <div>
        <Router>
          <Main>
            <RouterList/>
          </Main>
        </Router>
      </div>
    )
  }
}
export default RouterApp;