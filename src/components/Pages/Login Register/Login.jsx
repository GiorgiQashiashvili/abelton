
import { useState } from "react"
import Password from "../../inputs/Password"
import { useNavigate } from "react-router-dom"

function Login() {
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
                    <h1>Login</h1>
                    <p><b>Why do I need to log in?</b> <br />
                        To use any version of Live (including Live Lite or our free trial) you need an <br />
                        Ableton account. It takes less than a minute to create one, and even less to <br />
                        log in if you already have one.
                    </p>
                </div>
                <div className="login-inputs">
                    <div className="email-input">
                        <p>E-mail or username</p>
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
                    <div className="login-btn">
                        <button onClick={handleClick}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login