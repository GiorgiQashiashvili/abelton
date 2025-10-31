import { IoIosArrowForward } from "react-icons/io"
import livehero from "../../../assets/live/livehero.mp4"
import pic1 from "../../../assets/live/ideaspic.png"
import pic2 from "../../../assets/live/pic2.png"
import pic3 from "../../../assets/live/pic3.png"
import Instruments from "../../Instruments"
import instruments from "../../data/instruments"

function Live() {
    return (
        <div className="live-main">
            <div className="live-hero">
                <video
                    src={livehero}
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
                <div className="live-hero-text">
                    <h1>Find <b>Yourself</b> <br />
                        again and again <br />
                        in Abelton Live
                    </h1>
                    <button>Buy now</button>
                </div>
            </div>
            <div className="live-content">
                <div className="live-text-bground">
                    <div className="live-text-bg">
                        <p>Live 12.2 is out now. A free update for all Live 12 users, it <br />
                            brings Bounce to New Track, major device improvements, and much more.</p>
                        <a href="">See what's new <IoIosArrowForward /></a>
                    </div>
                </div>
                <div className="live-video-div">
                    <h1>Get lost in Live 12’s creative features and sounds – and find your own way <br />
                        of making music.</h1>
                    <div className="live-video">
                        <iframe
                            width="750px"
                            height="400px"
                            src="https://www.youtube.com/embed/QFCV6EkqRQs?&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=QFCV6EkqRQs"
                            frameborder="0"></iframe>
                        <p>A look at some of the highlights of Live 12</p>
                    </div>
                </div>
                <div className="live-possible">
                    <h1>Find out what’s possible in Live 12</h1>
                    <p>Jump to:
                        <a href="#Play freely with ideas">Play freely with ideas</a>
                        <a href="#Surprise yourself with sounds">Surprise yourself with sounds</a>
                        <a href="#Work more intuitively">Work more intuitively</a>
                        <a href="#See all new features">See all new features</a>
                    </p>
                </div>
                <div className="live-ideas-main">
                    <div className="live-ideas">
                        <div className="ideas-title">
                            <h1>Play freely with ideas</h1>
                        </div>
                        <div className="ideas-video">
                            <iframe
                                width="1000px"
                                height="500px"
                                src="https://www.youtube.com/embed/z7kjcMvMr3M?si=R2I-xifedLlRmwGw"
                                frameborder="0"></iframe>
                            <p>A demonstration of the new MIDI Tools</p>
                        </div>
                    </div>
                    <div className="ideas-textes">
                        <div className="reshape-text">
                            <p><b>Reshape MIDI patterns</b></p>
                            <p>Apply a variety of simple or complex variations to your MIDI clips with new <br />
                                MIDI Transformations. Add ornaments and articulations, draw acceleration <br />
                                and deceleration curves, connect successive notes and chords, simulate the <br />
                                strum of a guitar, and more.</p>
                        </div>
                        <div className="reshape-text">
                            <p><b>Generate inspiration</b></p>
                            <p>Conjure up melodies, chords and rhythms with the help of new MIDI <br />
                                Generators. Set constraints and let your chosen Generator create playful and <br />
                                original ideas for you to develop and turn into your own.</p>
                        </div>
                    </div>
                    <div className="all-video-text">
                        <div className="ideas-picture-text">
                            <img src={pic1} alt="" />
                            <div className="pic-text">
                                <p><b>Do more with Max for Live</b><br /></p>
                                <p>Try out additional Max for Live Transformations and <br />
                                    Generators that give you deeper ways of working with <br />
                                    MIDI, or go even further by building new ones.</p>
                            </div>
                        </div>
                        <div className="ideas-video-txt">
                            <div className="ideas-video-text">
                                <p><b>Embrace and explore tunings</b><br /></p>
                                <p>Follow your preferred tuning systems or try different <br />
                                    ones more easily. Work outside of 12-tone equal <br />
                                    temperament, and use your tuning with Live’s <br />
                                    devices as well as any MPE-capable plugin or <br />
                                    hardware.</p>
                            </div>
                            <div className="video-txt">
                                <iframe
                                    width="800px"
                                    height="400px"
                                    src="https://www.youtube.com/embed/5-ZldZ5WhSM?si=K5jQ2gFiG3qg3sLA"
                                    frameborder="0"></iframe>
                                <p>A demonstration of the new MIDI Tools</p>
                            </div>
                        </div>
                        <div className="ideas-video-txt">
                            <div className="video-txt">
                                <iframe
                                    width="800px"
                                    height="400px"
                                    src="https://www.youtube.com/embed/u6IpJYpN48A?si=soYbbNxogswV6SB2"
                                    frameborder="0"></iframe>
                                <p>A demonstration of the new MIDI Tools</p>
                            </div>
                            <div className="ideas-video-text">
                                <p><b>Stay in key</b><br /></p>
                                <p>Transform or generate ideas within the confines of <br />
                                    the selected scale, or sync the scale of MIDI <br />
                                    devices and instruments to the clip being played.</p>
                            </div>
                        </div>
                        <div className="ideas-picture-text">
                            <img src={pic2} alt="" />
                            <div className="pic-text">
                                <p><b>Edit MIDI more easily</b><br /></p>
                                <p>Use keyboard and mouse operations to edit MIDI in new <br />
                                    ways. Split a note in two, or chop it into several parts. Select <br />
                                    a set of notes and join them together, or make them fill a <br />
                                    selected time range. Plus, you can access to more tools from <br />
                                    the Note Utilities panel on the left, such as Fit to Scale, <br />
                                    Humanize, Add Intervals, and more.</p>
                            </div>
                        </div>
                        <div className="ideas-picture-text">
                            <img src={pic3} alt="" />
                            <div className="pic-text">
                                <p><b>Modulate more flexibly</b><br /></p>
                                <p>Stay in control of a parameter, even after it’s been mapped <br />
                                    to a modulation source; Max for Live devices like LFO, <br />
                                    Shaper and Envelope Follower now let you freely adjust a <br />
                                    destination that’s being modulated.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="live-instruments">
                    {instruments.map((ins) => {
                        return (
                            <Instruments
                                key={ins.id}
                                title={ins.title}
                                img={ins.img}
                                text={ins.text}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Live