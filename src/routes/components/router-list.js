import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
/* code splitting */
import Loadable from 'react-loadable';

/*loading*/
import Loading from '../../loading/loading';
/*404 error*/
import NoMatch from '../../notmatch/notmatch';
/* Home */
import Home from '../../home/home';
// const Home = Loadable({
//   loader: ()=> import('../../home/home'),
//   loading: Loading
// });

const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route component={ NoMatch } />
    </Switch>        
  )
}


export default RouterList;
