import pushhero from "../../assets/push/pushher.mp4"
import pushvideo from "../../assets/push/pushvideo.mp4"
import pushvideo2 from "../../assets/push/pushvideo2.mp4"
import pushvideo3 from "../../assets/push/pushvideo3.mp4"


function Push() {
    return (
        <div className="push-main">
            <div className="push-content">
                <div className="push-hero">
                    <video
                        src={pushhero}
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                    <div className="push-hero-text">
                        <h1>Push</h1>
                        <p>An expressive standalone instrument</p>
                        <button>Buy now</button>
                    </div>
                </div>
                <div className="push-videos-div">
                    <div className="push-focus-txt">
                        <h1>Focus and feel</h1>
                        <p>Push gives you independence from your computer so you can be fully in the moment <br />
                            with your music. Connect your gear. Sculpt your sound. Play in a style that’s <br />
                            recognizably yours. An upgradeable instrument and an ever-evolving bond with <br />
                            Ableton Live, Push is designed to sit at the heart of your setup for years to come.</p>
                    </div>
                    <div className="push-videos">
                        <div className="push-video">
                            <video
                                src={pushvideo}
                                controls
                                loop
                                playsInline
                            ></video>
                            <p><b>MPE-enabled pads</b>
                                Shape your sound with pads that respond to the slightest <br />
                                movement of your fingers. Bend, slide and shift between <br />
                                different notes, sounds and articulations.</p>
                        </div>
                        <div className="push-video">
                            <video
                                src={pushvideo2}
                                controls
                                loop
                                playsInline
                            ></video>
                            <p><b>Standalone playability</b>
                                Push invites you to disconnect and be fully in the moment <br />
                                with your music. Send your Live sets to Push to work without <br />
                                a computer, then back again.</p>
                        </div>
                        <div className="push-video">
                            <video
                                src={pushvideo3}
                                controls
                                loop
                                playsInline
                            ></video>
                            <p><b>Built-in audio interface</b>
                                Plug your instruments into Push’s own audio interface to <br />
                                record straight into your set. Plus, send CV and gate signal <br />
                                s to your modular setup.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Push