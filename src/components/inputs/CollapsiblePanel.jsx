import { BsPlus } from "react-icons/bs"
import { useState } from "react"


function CollapsiblePanel({ id, title, text }) {
    const [isOpen, setIsOpen] = useState(false)

    const togglePanel = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapsible-panel">
            <div
                onClick={togglePanel}
                className="panel">
                <h1><BsPlus />{title}</h1>
                {isOpen && (
                    <div className="panel-text">
                        {text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CollapsiblePanel