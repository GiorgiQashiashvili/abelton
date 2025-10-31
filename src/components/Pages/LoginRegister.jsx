import Password from "../inputs/Password"
import { useState } from "react"
import Login from "./Login Register/Login"
import Register from "./Login Register/Register"

function LoginRegister() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")

    return (
        <div className="login-reg-main">
            <Login />
            <Register />
        </div>
    )
}

export default LoginRegister