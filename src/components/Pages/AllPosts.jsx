import Artists from "../albums/Artists"
import allposts from "../data/allposts"



function AllPosts() {
    return (
        <div className="allposts-main">
            <div className="allposts-title">
                <h1>The latest from Ableton</h1>
            </div>
            <div className="all-posts">
                {allposts.map((a) => {
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
        </div>
    )
}

export default AllPosts