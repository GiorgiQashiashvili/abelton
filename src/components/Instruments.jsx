


function Instruments({ title, img, text, id }) {
    return (
        <div className="instrument-main">
            <div className="instrument-title">
                <h1>{title}</h1>
            </div>
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Instruments