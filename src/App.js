import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import IsGlitchy from './glitcher';
import Loading from './loading';

function App() {

  return (
<>

    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={IsGlitchy} />
        <Route exact path="/loadingpage" component={Loading} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
      {/* <Footer /> */}

    </Router>

{/* 

    <div className="App">

      <header className="App-header">


        <IsGlitchy />


      </header>


    </div> */}


</>
  );
}

export default App;
