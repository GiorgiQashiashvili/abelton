import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"


function EmailInput() {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleClick = () => {
        if (value.trim() === "") {
            setError("Please enter a valid email address")
            return;
        }
        setError("")
        navigate("/forsignup")
    }
    return (
        <div className="footer-input">
            <div className="footer-signup-input">
                <input type="email"
                    placeholder="Email Address"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                    <button onClick={handleClick}>Sign up</button>
            </div>
            {error && <p
                style={{
                    color: "red",
                    fontSize: "15px",
                    position: "absolute"
                }}
            >{error}</p>}
        </div>
    )
}

export default EmailInput