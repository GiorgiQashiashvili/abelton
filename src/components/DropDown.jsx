import { Link } from "react-router-dom"



function DropDown() {
    return (
        <div className="dropdown">
            <div className="dropdown-inner">
                <div className="more-on-abelton">
                    <div className="title">
                        <h1>More on Abelton.com:</h1>
                    </div>
                    <div className="abelton-links">
                        <a href="">Blog</a>
                        <a href="">Abelton for the Classroom</a>
                        <a href="">Abelton for Colleges and Univesities</a>
                        <a href="">Cerified Training</a>
                        <Link to={"/main"}>About Abelton</Link>
                        <Link to={"/jobs"}>Jobs</Link>
                        <Link to={"/apprenticeships"}>Apprenticeships</Link>
                    </div>
                </div>
                <div className="more-from-abelton">
                    <div className="title">
                        <h1>More from Abelton:</h1>
                    </div>
                    <div className="abelton-more-links">
                        <div className="links">
                            <p><b>Loop</b></p>
                            <a href="">Watch Talks, Performances and <br />
                                Features from Abelton's Summit for <br />Music Makers
                            </a>
                        </div>
                        <div className="links">
                            <p><b>Learning Music </b></p>
                            <a href="">Learn the fundamentals of music<br />
                                making right in your browser.
                            </a>
                        </div>
                        <div className="links">
                            <p><b>Learning Synths </b></p>
                            <a href="">Get started with synthesis using a <br />
                                web-based synth and <br />accompanying lessons.
                            </a>
                        </div>
                        <div className="links">
                            <p><b>Making Music</b></p>
                            <a href="">Some tips from 74 Creative <br />
                                Strategies for Eelectronic Producers.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown