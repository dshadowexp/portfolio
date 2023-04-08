import self__portrait from '../../../assets/SamPassportPic.jpeg';

const backendTools: string[] = [
    'nodejs',
    'typescript',
    'python',
    'mongodb',
    'postgresql',
    'firebase'
];

const frontendTools: string[] = [
    'html5',
    'css3',
    'sass',
    'javascript',
    'react',
    'redux'
];

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
                    <p className='tools__name'>Backend</p>
                    <div className='tools__list'>
                        {backendTools.map((tool, index) => 
                            <i key={index} className={`bx bxl-${tool} bx-md`}></i>
                        )}
                    </div>
                </div>
                <div className="tools">
                    <p className='tools__name'>Frontend</p>
                    <div className='tools__list'>
                        {frontendTools.map((tool, index) => 
                            <i key={index} className={`bx bxl-${tool} bx-md`}></i>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className="summary__figure">
            <figure>
                <img src={self__portrait} alt="" />
            </figure>
        </div>
    </section>);
}