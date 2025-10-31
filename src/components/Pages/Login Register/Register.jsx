
import { useState } from "react"
import Password from "../../inputs/Password"
import { useNavigate } from "react-router-dom"
import LocationSelect from "../../inputs/LocationSelect"

function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [value, setValue] = useState("")


    const navigate = useNavigate()

    const handleClick = () => {
        if (value.trim() === "") {
            setError("Please enter a valid email address")
            return;
        }
        setError("")
        navigate("/main")
    }
    return (
        <div className="login-reg-main">
            <div className="login-main">
                <div className="login-txt">
                    <h1>Register</h1>
                    <p><b>New Customer? Please create an account.</b> <br />
                        Your account lets you authorize and download Live plus your included library <br />
                        content.
                    </p>
                </div>
                <div className="login-inputs">
                    <div className="email-input">
                        <p>Email</p>
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="email" />
                    </div>
                    <div className="password-input">
                        <p>Password</p>
                        <Password
                            showPassword={showPassword}
                        />
                        {error &&
                            <p style={{
                                color: "red",
                                fontSize: "15px",
                            }}>
                                {error}
                            </p>
                        }
                    </div>
                    <div className="showpass">
                        <input
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            type="checkbox" />
                        <p>Show password</p>
                    </div>
                    <div className="email-input">
                        <p>First name</p>
                        <input type="text" placeholder="optional" />
                    </div>
                    <p className="f-name">So that we know what to call you if we email you.</p>
                    <div className="email-input">
                        <p>Last name</p>
                        <input type="text" placeholder="optional" />
                    </div>
                    <div className="register-select">
                        <LocationSelect />
                    </div>
                    <div className="signup-checkbox">
                        <input type="checkbox" />
                        <p><b>Sign up to the Ableton newsletter to stay up to date with the latest <br />
                            special offers, tutorial videos, downloads, surveys and other news. </b>It’s free <br />
                            and you can unsubscribe at any time. Further information is available in our <br />
                            Privacy Policy.</p>
                    </div>
                    <div className="login-btn">
                        <button onClick={handleClick}>Create account</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register