import React from 'react'

import './BrowserPage.css'
import MobilePage from "./MobilePage";

export default class BrowserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.getElementById("mobile_page").style = "height: unset!important";
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
