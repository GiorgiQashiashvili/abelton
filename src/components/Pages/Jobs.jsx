import jobs from "../../assets/jobs.png"

function Jobs() {
    return (
        <div className="jobs-main">
            <div className="jobs-content">
                <div className="jobs-pic">
                    <img src={jobs} alt="" />
                </div>
                <div className="jobs-text">
                    <h1>Working at Ableton means being a part of creating products that <br />
                        shape the future of music culture in a dynamic and diverse <br />
                        environment</h1>
                    <p>Here at Ableton, we come from a wide range of cultural and professional backgrounds. We work hard <br />
                        to foster an environment in which people can grow both personally and professionally. We believe <br />
                        that diverse groups of people make better teams. We’re committed to increasing diversity in our workplace <br />
                        and providing equal opportunity throughout our recruitment process. Because of this we ask that you do <br />
                        not include a picture in your application documents. Thank you very much for your understanding.</p>
                    <p>If you want to apply for one of our open positions, we would be happy to receive your application <br />
                        through our application form. Please upload all necessary documents there.</p>
                    <div className="jobs-finance">
                        <p><b>Finance</b></p>
                        <p>Indirect Tax Specialist (d/f/m) <br />
                            Ableton AG / Germany</p>
                    </div>
                    <p><b>Product Development</b></p>
                </div>
            </div>
        </div>
    )
}

export default Jobs