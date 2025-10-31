import { IoIosArrowForward } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Logo from "./Logo";
import EmailInput from "./inputs/EmailInput";
import Select from "./inputs/Select";
import LocationSelect from "./inputs/LocationSelect";


function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-title">
                <h1>Abelton</h1>
            </div>
            <div className="footer-line1">
                <div className="footer-regist-links">
                    <a href="">Register Live, Push or Move <IoIosArrowForward /></a>
                    <a href="">About Ableton<IoIosArrowForward /></a>
                    <a href="">Jobs<IoIosArrowForward /></a>
                    <div className="social">
                        <a href="https://www.facebook.com/ableton"><BsFacebook /></a>
                        <a href="https://x.com/ableton"><RiTwitterXLine /></a>
                        <a href="https://www.youtube.com/ableton"><FaYoutube /></a>
                        <a href="https://www.instagram.com/ableton/"><AiFillInstagram /></a>
                        <a href="https://www.tiktok.com/@ableton"><FaTiktok /></a>
                        <a href="https://discord.com/invite/ableton"><FaDiscord /></a>
                    </div>
                </div>
                <div className="education-links">
                    <p><b>Education</b></p>
                    <a href="">Offers for students and teachers <IoIosArrowForward /></a>
                    <a href="">Abelton for the Classroom <IoIosArrowForward /></a>
                    <a href="">Abelton for Colleges and Universities <IoIosArrowForward /></a>
                </div>
                <div className="footer-signup">
                    <p><b>Sign up to our newsletter</b></p>
                    <p>Enter your email address to stay up to date with the <br />
                        latest offers, tutorials, downloads, surveys and more.</p>
                    <div className="footer-signup-input">
                        <EmailInput />
                    </div>
                </div>
            </div>

            <div className="footer-line2">
                <div className="comunity-links">
                    <p><b>Community</b></p>
                    <a href="">Find Ableton User Groups <IoIosArrowForward /></a>
                    <a href="">Find Certified Training <IoIosArrowForward /></a>
                    <a href="">Become a Certified Trainer <IoIosArrowForward /></a>
                </div>
                <div className="lang-location">
                    <p><b>Language and Location</b></p>
                    <div className="footer-select">
                        <Select
                            className="language"
                            options={[
                                {
                                    value: 2,
                                    name: "Deustch"
                                },
                                {
                                    value: 3,
                                    name: "Français"
                                },
                                {
                                    value: 4,
                                    name: "Español"
                                },
                            ]}
                            defaultName={"English"}
                        />
                        <LocationSelect
                        />{ }
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <div className="contact-links">
                    <a href="">Contact Us</a>
                    <a href="">Press Resources</a>
                    <a href="">Legal Info</a>
                    <a href="">Corporate Information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Settings</a>
                    <a href="">Imprint</a>
                </div>
                <div className="made-in">
                    <p><b>Made in Berlin</b></p>
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Footer