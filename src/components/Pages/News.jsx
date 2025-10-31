import NewsAlbums from "../albums/NewsAlbums"
import news from "../data/news"



function AllPosts() {
    return (
        <div className="allposts-main">
            <div className="allposts-title">
                <h1>The latest news from Ableton</h1>
            </div>
            <div className="all-posts">
                {news.map((n) => {
                    return (
                        <NewsAlbums
                            key={n.id}
                            image={n.image}
                            status={n.status}
                            name={n.name}
                            text={n.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AllPosts