import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import IsGlitchy from './glitcher';
import Main from './mainpage';
import Loading from './loading';

function App() {

  return (
    <>

      <Router>
        <div>
          {/* <NavTabs /> */}
          <Route exact path="/" component={IsGlitchy} />
          <Route exact path="/mainpage" component={Main} />
          {/* <Route path="/contact" component={Contact} /> */}
        </div>
        {/* <Footer /> */}

      </Router>


    </>
  );
}

export default App;
