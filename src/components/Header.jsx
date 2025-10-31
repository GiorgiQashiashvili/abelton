import Logo from "./Logo"
import MoreButton from "./inputs/MoreButton"
import DropDown from "./DropDown"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
    const [isToggled, setIsToggled] = useState(false)
    const [toggleMore, setToggleMore] = useState(false)

    const toggleAbout = () => {
        setToggleMore(!toggleMore)
    }

    const handleClick = () => {
        setIsToggled(!isToggled)
    }


    return (
        <div className="header-main">
            <div className="header-right">
                <div className="header-logo">
                    <Logo />
                </div>
                <div className="right-links">
                    <Link to={"/live"}>Live</Link>
                    <Link to={"/push"}>Push</Link>
                </div>

                <div className={`more ${isToggled ? "show-dropdown" : ""}`}>
                    <MoreButton
                        isToggled={isToggled}
                        onClick={() => {
                            handleClick();
                            toggleAbout();
                        }} />
                    {toggleMore && (
                        <DropDown />
                    )}
                </div>

            </div>

            <div className="header-left">
                <Link to={"/login-register"}>Login or Register</Link>
            </div>
        </div>
    )
}

export default Header