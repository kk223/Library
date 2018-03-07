
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppHeader from './components/authentiation.jsx';
import Navigator from './components/search.jsx';
import Introduction from './components/welcome.jsx';
import viewFavorite from './components/viewFavorite.jsx';
import EnsureLoggedInContainer from './EnsureLoggedInContainer.jsx';
injectTapEventPlugin();

ReactDOM.render((
  <Router history={hashHistory}>
          <Route path="/" component={AppHeader}>
              <Route path="/Home" component={Introduction}/>
                <Route component={EnsureLoggedInContainer}>
                <Route path="/UserHome" component={Navigator}/>
                <Route path="/viewFavorite" component={viewFavorite}/>
                </Route>
                </Route>
            </Router>
), document.getElementById('container'));
