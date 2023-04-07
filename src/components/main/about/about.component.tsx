import illustration from '../../../assets/undraw_firmware_re_fgdy.svg';

export default function About() {
    return (<section className='about'>
            <article className='about__info'>
                <div>
                    <h2>In the span of time,</h2>
                    <p>
                        Hello! My name is Samuel and I enjoy creating things on the internet.
                        My interest in computer science started back in 2016 in college where I
                        wrote my first line of code in MatLab for an engineering course.
                    </p>
                    <p>
                        Fast-forward to today, I've built products for companies and businesses
                        around the globe ranging from marketing websites to complex
                        solutions and enterprise mobile apps with focus on fast, elegant,
                        and accessible user experiences
                    </p>
                    <p>
                        Before now, I was Principal Frontend Engineer at hellotax, where I worked
                        on a suite of tools and services tailored at providing fast, automated VAT 
                        Registration / filings & Returns solutions for multi-channel sellers in Europe.
                    </p>
                    <p>
                        I once also led the frontend team at Conectar, an e-learning startup 
                        through building multiple React applications into a single robust learning 
                        platform.
                    </p>
                </div>
            </article>
            <figure className='about__illustration'>
                <img src={illustration} alt="" />
            </figure>
    </section>);
}