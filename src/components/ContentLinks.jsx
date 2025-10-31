import { Link } from "react-router-dom"



function ContentLinks() {
    return (
        <div className="content-main">
            <div className="main-links">
                <Link to={"/about"}>About</Link>
                <Link to={"/jobs"}>Jobs</Link>
                <Link to={"/Apprenticeships"}>Apprenticeships</Link>
            </div>
        </div>
    )
}

export default ContentLinks