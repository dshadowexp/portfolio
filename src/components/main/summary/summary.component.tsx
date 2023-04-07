export default function Summary() {
    return (<section className="summary">
        <div className="summary__primary">
            <article>
                <h5>Hi, my name is</h5>
                <h1>Samuel Appiah-Kubi</h1>
                <p>
                    I am a <span>Software Engineer</span> who enjoys building, implementing and designing
                    scalable and efficient systems and occasionally digital experiences.
                </p>
            </article>
            <div className="summary__secondary">
                <div className="tools">
                    <i className='bx bxl-nodejs bx-md'></i>
                    <i className='bx bxl-javascript bx-md'></i>
                    <i className='bx bxl-typescript bx-md'></i>
                    <i className='bx bxl-python bx-md'></i>
                    <i className='bx bxl-mongodb bx-md'></i>
                    <i className='bx bxl-postgresql bx-md'></i>
                    <i className='bx bxl-firebase bx-md'></i>
                </div>
                <div className="tools">
                    <i className='bx bxl-html5 bx-md'></i>
                    <i className='bx bxl-css3 bx-md'></i>
                    <i className='bx bxl-sass bx-md'></i>
                    <i className='bx bxl-react bx-md'></i>
                    <i className='bx bxl-redux bx-md'></i>
                </div>
            </div>
        </div>
        <div className="summary__figure">
            <figure>
                <img src="https://picsum.photos/200" alt="" />
            </figure>
        </div>
    </section>);
}