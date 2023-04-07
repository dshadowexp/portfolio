export default function Project() {
    return (<div className="project__inner">
        <div>        
            <div className="project__top">
                <div>
                    <i className='bx bx-folder bx-md'></i>
                </div>
                <div>
                    <a href=""><i className='bx bxl-git bx-sm'></i></a>
                    <a href=""><i className='bx bx-link bx-sm'></i></a>
                </div>
            </div>
            <h3 className="project__title">Time to Have More Fun</h3>
            <div className="project__description">
                <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>
            </div>
        </div>
        <div>
            <ul className="project__bottom">
                <li><i className='bx bxl-nodejs bx-sm'></i></li>
                <li><i className='bx bxl-typescript bx-sm'></i></li>
                <li><i className='bx bxl-react bx-sm'></i></li>
            </ul>
        </div>
    </div>);
}