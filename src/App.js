import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Roadmap from './Component/Roadmap';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className='Menu-wrapper'>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/community'><li>Community</li></Link>
            <Link to='/mypage'><li>MyPage</li></Link>
          </ul>
        </div> */}
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/roadmap' component={Roadmap} />
            {/* <Route path='/community' component={Community} />
            <Route path='/mypage' component={Mypage} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;