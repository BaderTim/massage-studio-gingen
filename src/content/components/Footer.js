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
                    <p className={"lead"}><strong>Angaben gemäß § 5 TMG</strong></p>
                    <p className={"lead"}>
                        Larissa Rissling<br/>
                        Hindenburgstraße 157<br/>
                        73333 Gingen<br/>
                    </p>
                    <p className={"lead"}>
                        <strong>Kontakt:</strong><br/>
                        <table class="table" style={{maxWidth: "300px"}}>
                            <tr>
                                <td>Telefon:</td>
                                <td>+49 15775200174</td>
                            </tr>
                            <tr>
                                <td>E-Mail:</td>
                                <td>larisarissling@web.de</td>
                            </tr>
                        </table>

                    </p>

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
