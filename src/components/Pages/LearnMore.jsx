import hero from "../../assets/learnMore/computerhero.png"
import lvlup from "../../assets/learnMore/lvlup.png"
import last from "../../assets/learnMore/lastpic.png"
import computertable from "../../assets/learnMore/5.png"
import CollapsiblePanel from "../inputs/CollapsiblePanel"
import panel from "../data/panel"


function LearnMore() {
    return (
        <div className="learn-more-main">
            <div className="learnmore-hero">
                <img src={hero} alt="" />
                <div className="hero-text">
                    <h1>Rent-to-own Ableton Live <br />
                        12 Suite</h1>
                    <button>Get started today</button>
                </div>
            </div>
            <div className="learnmore-music">
                <h1>Make music without the <br />
                    upfront cost</h1>
                <p>With a rent-to-own plan you’ll get unlimited access to Live 12 Suite right <br />
                    away, but spread the cost over 24 affordable monthly payments. You’ll pay <br />
                    the same total price as you would with a one-off purchase, and once you’ve <br />
                    completed your plan the license is yours to keep.</p>
            </div>
            <div className="learnmore-livesuite">
                <img src={lvlup} alt="" />
                <div className="livesuit-text">
                    <h1>Level up with Live Suite</h1>
                    <p>Build unique sounds with powerful instruments like Meld, <br />
                        shape and color them with versatile effects like Roar, and <br />
                        develop them even further in Max for Live. Suite has <br />
                        everything you need to take your musical ideas to the <br />
                        next level.</p>
                    <a href="">Learn more about Live ›</a>
                </div>
            </div>
            <div className="how-it-works">
                <h1>How it works</h1>
                <p><b>Start today </b><br />
                    Get access to all of Live 12 Suite’s features right away, without paying the full <br />
                    cost all at once.</p>
                <p><b>Transparent pricing</b><br />
                    Pay the same total price as a regular purchase. No interest, no mark-up fees, <br />
                    no extra charges for late payments.</p>
                <p><b>Pause anytime</b><br />
                    Want to take a break? No problem – pause your plan whenever you like, <br />
                    and start again when you’re ready.</p>
            </div>
            <div className="choose-rentto-own">
                <img src={computertable} alt="" />
            </div>
            <div className="learnmoore-panel">
                {panel.map((p) => {
                    return (
                        <CollapsiblePanel
                            key={p.id}
                            title={p.title}
                            text={p.text}
                        />
                    )
                })}
            </div>
            <div className="learnmore-lastpic">
                <div className="learnmore-lastpic-text">
                    <p><b>Unlock your potential</b></p>
                    <p className="p-with-bg">Get all the features of Live 12 Suite without having <br />
                        to pay for it all at once.</p>
                    <a href="">Get started today</a>
                </div>
                <img src={last} alt="" />
            </div>
        </div>
    )
}

export default LearnMore