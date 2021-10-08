import React from 'react'

import './BrowserPage.css'
import MobilePage from "./MobilePage";

export default class BrowserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="BrowserPage">
                <div className={"browser-page-container"}>
                    <MobilePage/>
                </div>
            </div>
        )
    }

}
