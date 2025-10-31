


function Select({ options, defaultName, }) {
    return (
        <div className="footer-select">
            <select className="language">
                <option value="">{defaultName}</option>
                {options?.map((option) => {
                    return (
                        <option
                            key={option?.value}
                            value="">
                            {option?.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select