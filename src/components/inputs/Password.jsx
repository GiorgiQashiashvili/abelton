


function Password({showPassword}) {
    return (
            <input 
            className="pass-input"
             type={showPassword ? "text" : "password"}/>
    )
}

export default Password