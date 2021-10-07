import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';

import './App.css'
import MobilePage from "./pages/MobilePage";
import BrowserPage from "./pages/BrowserPage";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
    <div className="App">
      <BrowserView>
        <BrowserPage/>
      </BrowserView>
      <MobileView>
        <MobilePage/>
      </MobileView>
    </div>
    )
  }

}
