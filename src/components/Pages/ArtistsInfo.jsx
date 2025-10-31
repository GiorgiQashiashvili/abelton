import artistsinfo from "../data/atristsinfo"
import Artists from "../albums/Artists"

function ArtistsInfo() {
    return (
        <div className="allposts-main" >
            <div className="allposts-title">
                <h1>Learn about different artists and how they make music</h1>
            </div>
            <div className="all-posts">
                {artistsinfo.map((a) => {
                    return (
                        <Artists
                            key={a.id}
                            image={a.image}
                            status={a.status}
                            name={a.name}
                        />
                    )
                })}
            </div>
        </div >
    )
}

export default ArtistsInfo