import { IoIosArrowForward } from "react-icons/io"
import headpic from "../../assets/mainPage/mainpagebackground.png"
import Artists from "../albums/Artists"
import artists from "../data/artists"
import move from "../data/move"
import learnlive from "../data/learnlive"
import Move from "../albums/Move"
import { Link } from "react-router-dom"

function MainPage() {
    return (
        <div className="main-page">
            <div className="mainpage-head">
                <img src={headpic} alt="" />
                <div className="mainpage-head-text">
                    <p>Spread the cost of Live 12 Suite <br /> with rent-to-own</p>
                    <Link to="/learnmore">Learn more<IoIosArrowForward /></Link>
                </div>
            </div>
            <div className="mainpage-albums">
                <div className="album-main-title">
                    <h2>The latest from Abelton</h2>
                    <div className="album-links">
                        <Link to={"/allposts"}>All posts</Link>
                        <Link to={"/artistsinfo"}>Artists</Link>
                        <Link to={"/news"}>News</Link>
                        <Link to={"/downloads"}>Downloads</Link>
                    </div>
                </div>
                <div className="mainpage-artists">
                    {artists.map((artist, id) => {
                        return (
                            <Artists
                                key={id}
                                id={artist.id}
                                name={artist.name}
                                image={artist.image}
                                status={artist.status}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="move-in-focus">
                <h2>Move in focus</h2>
                <div className="move">
                    {move.map((focus, id) => {
                        return (
                            <Move
                                key={id}
                                image={focus.image}
                                name={focus.text}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="learn-about-live">
                <h2>Learn more about Live 12</h2>
                <div className="learn-live">
                    {learnlive.map((live, id) => {
                        return (
                            <Move
                                key={id}
                                image={live.image}
                                name={live.text}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="mainpage-more">
                <p>More:</p>
                <Link to="/allposts">All posts</Link>
                <Link to={"/artistsinfo"}>Artists</Link>
                <Link to={"/news"}>News</Link>
                <Link to={"/downloads"}>Downloads</Link>
            </div>
        </div>
    )
}

export default MainPage