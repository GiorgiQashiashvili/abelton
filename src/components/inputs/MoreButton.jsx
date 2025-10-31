
function MoreButton({isToggled, onClick}) {

    return (
        <div className="more">
            <button 
            onClick={onClick}>{isToggled ? "More -": "More +"}</button>
        </div>
    )
}

export default MoreButton