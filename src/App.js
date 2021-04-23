import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import IsGlitchy from './glitcher'

function App() {

  return (
<>

    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={IsGlitchy} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
      {/* <Footer /> */}

    </Router>



    <div className="App">

      <header className="App-header">


        <IsGlitchy />


      </header>


    </div>


</>
  );
}

export default App;
