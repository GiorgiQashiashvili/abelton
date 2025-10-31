import abeltonbg from "../../assets/Screenshot 2025-10-27 at 6.35.40 PM.png"
import image from "../../assets/Screenshot 2025-10-28 at 1.20.51 AM.png"
import image3 from "../../assets/3picin1.png"
import picin1 from "../../assets/2picin1.png"
import image2 from "../../assets/Screenshot 2025-10-28 at 2.50.18 AM.png"
import bgimage from "../../assets/Screenshot 2025-10-28 at 1.24.24 AM.png"
import lastpic from "../../assets/Screenshot 2025-10-28 at 3.16.04 AM.png"
import { IoIosArrowForward } from "react-icons/io";

function About() {
    return (
        <div className="about-main">
            <div className="abelton-bg-img">
                <img src={abeltonbg} alt="" />
            </div>
            <div className="about-text">
                <p><b>We make <a href="">Live</a>, <a href="">Push</a>, <a href="">Move</a>, and <a href="">Link</a> - unique sofware and hardware for music <br />
                    creation and performance. With these products, our community of users creates <br />
                    amazing things.
                </b></p>
                <p>Abelton was founded in 1999 abd released the first version of Live in 2001. Our products are used by a <br />
                    community of dedicated musicians, sound designers, and artists from across the world.
                </p>
            </div>
            <div className="about-bg-images">
                <div className="img-w-bg">
                    <img src={image} alt="" />
                </div>
                <div className="bg-img">
                    <img src={bgimage} alt="" />
                </div>
            </div>
            <div className="about-text">
                <p><b>Making music isn't easy. It takes time, effort, and learning. But when you're in the flow,<br />
                    it's incredibly rewarding.
                </b></p>
                <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for<br />
                    what we make, and the people we make it for.
                </p>
            </div>
            <div className="about-video">
                <iframe
                    width="750px"
                    height="400px"
                    src="https://www.youtube.com/embed/9SbnhgjeyXA"
                    frameborder="0"></iframe>
                <p>Why Ableton - Juanpe Bolivar</p>
            </div>
            <div className="about-text">
                <p><b>We are more than 350 people from 30 different countries divided between our<br />
                    headquarters in Berlin and our offices in Los Angeles and Tokyo.
                </b></p>
                <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come <br />
                    from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and <br />
                    most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and <br />
                    knowledge to contribute to something big: helping to shape the future of music culture.
                </p>
            </div>
            <div className="img-w-bg3">
                <div className="img-w-bg3">
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="about-text">
                <p><b>We believe it takes focus to create truly outstanding instruments. We only work on a <br />
                    few products and we strive to make them great.
                </b></p>
                <p>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic <br />
                    and grow. We've learned that achieving the best results comes from building teams that are richly diverse, and <br />
                    thus able to explore problems from a wider set of perspectives. We don't always agree with each other, but <br />
                    opinion and debate are valued and openly encouraged.
                </p>
            </div>
            <div className="img-w-bg3">
                <img src={image2} alt="" />
            </div>
            <div className="about-text">
                <p><b>We're passionate about what we do, but we're equally passionate about improving <br />
                    who we are.
                </b></p>
                <p>We work hard to foster an environment where people can grow both personally and professionally, and we <br />
                    strive to create a wealth of opportunities to learn from and with each other.
                </p>
                <p>Alongside an internal training program, employees are actively supported in acquiring new knowledge and <br />
                    skills, and coached on applying these in their daily work. In addition, staff-organized development and music <br />
                    salons are a chance to discuss new technologies, production techniques and best practices.
                </p>
            </div>
            <div className="about-bg-images4">
                <img className="image4" src={picin1} alt="" />
            </div>
            <div className="about-text">
                <p><b>We want our employees to love it here. Since we're looking for exceptional talent from <br />
                    around the world, we will do everything we can to make your transition as easy as <br />
                    possible.
                </b></p>
                <p>If you're joining us in Berlin, we'll help with relocation and paperwork. We'll even provide you with free <br />
                    German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance <br />
                    for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it's not <br />
                    all work; we have several company and team outings throughout the year as well as a variety of fun, informal <br />
                    small-group activities.
                </p>
            </div>

            <div className="about-bg-images5">
                    <img src={lastpic} alt="" />
                <div className="bg-link">
                    <p>We’re really proud of the work we’ve done so far. But there’s so much more to come. If <br />
                        you’d like to be a part of it, please join us.</p>
                    <a href="">See latest jobs <IoIosArrowForward /></a>
                </div>
            </div>
        </div>
    )
}

export default About