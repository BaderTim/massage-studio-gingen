import React from 'react'

import './Footer.css'

export default class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            impressumActive: false
        }
    }

    render() {
        return (<div>
            <div hidden={!this.state.impressumActive}
                 className={"impressum-container"}>
                <button className={"btn btn-danger impressum-close"}
                        onClick={() => this.setState({impressumActive: false})}
                >X</button>
                <div className={"impressum lightpeach-bg"}>
                    <h1 className={"display-4"}>Impressum</h1>
                    <br/>
                    <p className={"lead"}>Line one</p>
                    <p className={"lead"}>Line two</p>
                    <p className={"lead"}>Line three <strong>lol</strong></p>
                    <p className={"lead"}>Line four</p>
                </div>
            </div>
            <div hidden={!this.state.impressumActive}
                className={"impressum-background"}/>
            <div className={"footer rhythm-bg"}>
                <span className={"footer-content"}
                      onClick={() => this.setState({impressumActive: !this.state.impressumActive})}
                >Impressum</span>
            </div>
        </div>
        )
    }

}
