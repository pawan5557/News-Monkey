
import './App.css';
import { HashRouter as Router , Route , Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
         {/* <Navbar></Navbar>
         <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
      />
        <News setProgress={this.setProgress} key="general" type="general"></News> */}


        <Router>

        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
      />
      
          <Routes>
            <Route path="/"element={<News setProgress={this.setProgress} key="general" type="general"> </News>}></Route>
            <Route path='/general' element={<News setProgress={this.setProgress} key="general" type="general"></News>}></Route>
            <Route path='/business'element={<News setProgress={this.setProgress} key="business" type="business"></News>}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" type="entertainment"></News>}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} key="health" type="health"></News>}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} key="sports" type="sports"></News>}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} key="technology" type="technology"></News>}></Route>
            
          </Routes>
        </Router>
      </div>
    )
  }
}























