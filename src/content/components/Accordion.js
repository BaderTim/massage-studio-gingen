import React from 'react'

import './Accordion.css'

export default class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        if(this.props.active) {
            this.setState({active: true})
        }
    }

    toggleAccordion(event) {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        let target;
        if(event.target.tagName==="DIV") {
            // divs inside button
            target = event.target.parentNode;
        } else {
            // button
            target = event.target;
        }
        /* Toggle between hiding and showing the active panel */
        const panel = target.nextElementSibling;
        if (panel.style.maxHeight) {
            this.setState({active: false})
            panel.style.maxHeight = null;
        } else {
            this.setState({active: true})
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        return (
            <div>
                <button className={this.state.active ? ("accordion acc-active") : ("accordion")}
                        onClick={(event) => this.toggleAccordion(event)}
                    ><div className={"acc-title-left"}>{this.props.title}</div>
                    <div className={"acc-title-right"}>
                        {this.state.active ? ("-") : ("+")}
                    </div>
                </button>
                <div className="panel" style={this.props.active ? ({maxHeight: "fit-content"}) : null}>
                    <div className={"panel-content"}>{this.props.children}</div>
                </div>
            </div>
        )
    }

}
