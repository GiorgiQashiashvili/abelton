

function News ({image, id, name, status, text}){
return(
    <div className="artist-album">
        <img src={image} alt="" />
        <div className="artist-name">
            <div className="news-status">
                <p>{status}</p>
            </div>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
)
}

export default News