import Artists from "../albums/Artists"
import allposts from "../data/allposts"
import { Link } from "react-router-dom"

function Downloads() {
    return (
        <div className="allposts-main">
            <div className="allposts-title">
                <h1>Live Sets, Racks, presets, Max for Live devices, and <br />
                    anything else you can download and use in Ableton <br />
                    Live. To download your free trial of Ableton Live visit <Link to="">Try <br />
                        Live for free</Link ></h1>
            </div>
            <div className="all-posts">
                {allposts.map((a) => {
                    return (
                        <Artists
                            key={a.id}
                            image={a.image}
                            status={a.status}
                            name={a.name}
                            text={a.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Downloads