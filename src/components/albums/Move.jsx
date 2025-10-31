

function Move ({image, id, name}){
return(
    <div className="artist-album">
        <img src={image} alt="" />
        <div className="artist-name">
            <p>{name}</p>
        </div>
    </div>
)
}

export default Move