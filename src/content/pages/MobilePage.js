import React from 'react'

import './MobilePage.css'
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

export default class MobilePage extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    toggleAccordion(event) {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        event.target.classList.toggle("active")
        /* Toggle between hiding and showing the active panel */
        const panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        return (
            <div id={"mobile_page"} className="MobilePage">
                <div className={"content"}>
                <div className={"entry-container"}>
                    <h1 className={"display-6 rhythm bold-sm"}>
                        Massagestudio Spa L.R.
                    </h1>
                    <h2 className={"display-6 rythm"} style={{fontSize: "15px"}}>
                        Massage - Wellness - Spa
                    </h2>


                    <div className={"intro"}>
                        <p className={"lead"}>
                            &#187;Luxus für Körper, Seele und Geist.&#171;
                        </p>
                    </div>

                    <img className={"intro-image"} alt={"massage_images"}
                         src={"images/uebersicht_2.jfif"}/>
                         <br/>
                </div>
                    <div className={"bottom-container"}>
                        <a href="https://api.whatsapp.com/send?phone=4915775200174&text=Hallo,%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20f%C3%BCr%20eine%20Massage%20vereinbaren%20:)" target="_blank"
                           className="list-group-item list-group-item-action list-group-item-success wa-termin" rel="noreferrer">
                            <img src={"wa_icon.png"} width={"20px"} alt={"wa_icon"}/>
                            {" "} Jetzt Termin vereinbaren
                        </a>
                        <small className={"note"}>Oder telefonisch unter <a href={"tel:+4915775200174"}>+49 15775200174</a></small>
                        <br/>
                    </div>
                <div className={"accordion-container"}>
                    <hr style={{margin: "0px"}}/>
                    <Accordion title={"Mein Angebot"}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item justify-content-between align-items-center rhythm-bg-medium">
                                <span>Klassische Massage</span>
                                <br/>
                                <span>
                                    <small>30 Minuten (nur Nacken & Rücken)</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>30 €</span>
                                </span>
                                <br/>
                                <span>
                                    <small>60 Minuten</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>55 €</span>
                                </span>
                            </li>

                            <li className="list-group-item justify-content-between align-items-center rhythm-bg-light">
                                <span>Kopf-, Nacken- & Gesichtsmassage</span>
                                <br/>
                                <span>
                                    <small>30 Minuten</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>35 €</span>
                                </span>
                            </li>

                            <li className="list-group-item justify-content-between align-items-center rhythm-bg-medium">
                                <span>Schröpfmassage</span>
                                <br/>
                                <span>
                                    <small>30 Minuten (nur Nacken & Rücken)</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>35 €</span>
                                </span>
                                <br/>
                                <span>
                                    <small>60 Minuten</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>60 €</span>
                                </span>
                            </li>

                            <li className="list-group-item justify-content-between align-items-center rhythm-bg-light">
                                <span>Hot Stone Massage</span>
                                <br/>
                                <span>
                                    <small>60 Minuten</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>60 €</span>
                                </span>
                            </li>

                            <li className="list-group-item justify-content-between align-items-center rhythm-bg-medium">
                                <span>Kräuterstempel Massage</span>
                                <br/>
                                <span>
                                    <small>60 Minuten</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>65 €</span>
                                </span>
                            </li>

                            <li className="list-group-item justify-content-between align-items-center rhythm-bg-light">
                                <span>Ayurveda Massage</span>
                                <br/>
                                <span>
                                    <small>90 Minuten</small>
                                    <span className="badge bg-success rounded-pill" style={{float: "right"}}>75 €</span>
                                </span>
                            </li>
                        </ul>
                    </Accordion>
                    <hr style={{margin: "0px"}}/>

                    <Accordion title={"Über Mich"}>
                        <p className={"lead"} style={{fontSize: "16px"}}>
                            <strong>
                                Anhaltender Stress setzt Ihrem Körper stark zu.{" "}
                            </strong>
                            In meinem Massagestudio in Gingen an der Fils
                            erfahren Sie die ein rundum Wohlfühlerlebnis,
                            das sich von Wellness bishin zu vielerlei
                            professionellen Massagen erstreckt. <br/>Ich biete Ihnen
                            ein sanftes Kissen für Ihre Seele und weiche Hände
                            für Ihre Verspannungen.
                        </p>
                        <img className={"intro-image"} alt={"larisa_image"}
                             src={"images/larissa.jfif"}/>
                        <blockquote className="blockquote" style={{marginTop: "5px"}}>
                            <p>Larissa Rissling</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Professionelle Masseurin aus
                            <cite title="Source Title"> Gingen an der Fils</cite>
                        </figcaption>

                    </Accordion>
                    <hr style={{margin: "0px"}}/>
                </div>
                </div>
                <div style={{marginTop: "auto"}}>
                    <Footer/>
                </div>
            </div>
        )
    }

}
