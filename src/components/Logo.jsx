import { Link } from "react-router-dom"
import abelton from "../assets/38738.jpg"

function Logo() {
    return (
        <Link to={"/main"} className="logo">
            <img src={abelton} alt="" />
        </Link>
    )
}

export default Logo