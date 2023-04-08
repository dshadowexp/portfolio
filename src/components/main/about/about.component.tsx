import illustration from '../../../assets/rez-illus.gif';

export default function About() {
    return (<section id="about" className='about'>
            <article className='about__info'>
                <div>
                    <h2>Through my years,</h2>
                    <p>
                        I have always been interested in computers. I encounted the first opportunity 
                        to learn programming at <span><a href="https://ousf.duke.edu/merit-scholarships/mastercard-foundation-scholars-program/" target="_blank">Duke University</a></span> during my undergraduate
                        eduation. There, I honed my engineering skills using Java, Python, C, and C++.
                    </p>
                    <p>
                        During summers, I interned at <span><a href="https://www.aerobotics.com/" target="_blank">Aerobotics</a></span> in Cape Town, South 
                        Africa and at <span><a href="https://learn.microsoft.com/en-us/azure/active-directory/external-identities/what-is-b2b" target="_blank">Microsoft</a></span> 
                        in Redmond, WA, USA. At this emerging startup and this large cooperation, I imbibed the skills of professional team collaboration 
                        and engineering work ethics.
                    </p>
                    <p>
                        After successfully completing my internship projects [<a href="https://www.aerobotics.com/farm" target="_blank">Tree Image Recognition</a> and <a href="https://learn.microsoft.com/en-us/azure/active-directory/external-identities/reset-redemption-status" target="_blank">Azure AD B2B Reset Redemption</a>],
                        I have since worked on an ecommerce and on-deman delivery startup, Zulwinie Commerce limited, <a href="https://www.amazon.jobs/en/">Amazon</a>, <a href="https://www.turing.com/">Turing</a>, 
                        and freelanced remotely.
                    </p>
                    <p>
                        Currently, I am an expert in building robust backend systems with <span style={{color: "#37c0ba"}}>NodeJs</span>.
                        I can deliver user friendly frontend experiences using <span style={{color: "#37c0ba"}}>ReactJs</span>. I enjoy exploring technologies
                        and working with teams on a myriad range of projects.
                    </p>
                </div>
            </article>
            <div className='about__illustration'>
                <figure>
                    <img src={illustration} alt="logistics illustration" />
                </figure>
            </div>
    </section>);
}