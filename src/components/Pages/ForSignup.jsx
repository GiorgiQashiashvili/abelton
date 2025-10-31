import { Link } from "react-router-dom"



function ForSignup() {
    return (
        <div className="for-signup">
            <h1>Thanks for Signing up</h1>
            <p>We have sent a sign-up confirmation email to your inbox.</p>
            <p>The Ableton Newsletter is available in English, German, and Japanese. If you already have an Ableton <br />
                account, you can change your newsletter language on the <a href="">account page</a>.</p>
            <div className="interests">
                <h1>See more of what interests you</h1>
                <p>Tell us about the music-making topics you’re interested in and we’ll include more of that content in the <br />
                    emails we send you. You’ll still always get the latest product news, special offers, surveys and featured <br />
                    articles.</p>
                <p>Music-making topics that interest you:</p>
                <div className="checkbox-inputs">
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>The basics of music-making</p>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Advanced music-making techniques</p>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Artist features and performances</p>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Histories of music cultures and technologies</p>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Packs, Live Sets and devices</p>
                    </div>
                </div>
                <div className="interests-save">
                    <a href={"/"}>
                        <button>Save</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ForSignup