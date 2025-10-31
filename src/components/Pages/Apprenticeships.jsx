import pic1 from "../../assets/apprenticeships.png"
import pic2 from "../../assets/apprenticeships2.png"


function Apprenticeships() {
    return (
        <div className="Apprenticeships-main">
            <div className="Apprenticeships-content">
                <div className="Apprenticeships-text">
                    <h1>Apprenticeships at Ableton</h1>
                    <h2>What are they and what do you need to get started?</h2>
                    <p>Dual apprenticeship programs have a long tradition in Germany, and they play an important role in the <br />
                        country’s economy. The programs are a proven stepping stone towards a meaningful career without the <br />
                        need for a university degree. They give you the chance to apply theoretical knowledge learned in a <br />
                        vocational school to tasks in the workplace, while you divide your time between class and office days.</p>
                    <img src={pic1} alt="" />
                    <p>At Ableton, you'll work towards the Office Management Assistant apprenticeship over two and a half <br />
                        years, developing your professional and personal skills in different teams. We look for people who are <br />
                        highly motivated to work in a commercial office environment, with an excellent level of German and <br />
                        very good English. It’s important that you’re eager to learn, organized in your work, and communicative <br />
                        when collaborating with others. Plus, you should be ready to get the most out of your development <br />
                        through giving and receiving feedback. You can expect a relaxed, professional atmosphere <br />
                        with a dynamic team of people who love music in return.</p>
                    <p>If this sounds like you, feel free to have a look at our detailed information in German here. And please <br />
                        share this page with anyone who might be interested to help us find our future colleagues!</p>
                    <img src={pic2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Apprenticeships