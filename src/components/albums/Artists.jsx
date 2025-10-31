

function Artists ({image, id, name, status}){
return(
    <div className="artist-album">
        <img src={image} alt="" />
        <div className="artist-name">
            <div className="artist-status">
                <p>{status}</p>
            </div>
            <p>{name}</p>
        </div>
    </div>
)
}

export default Artists