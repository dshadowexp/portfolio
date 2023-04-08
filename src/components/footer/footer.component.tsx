export default function Footer() {
    return (<footer className="footer">
        <div className="footer__icons">
            <a href="https://medium.com/@samkofi.appiahkubi" target="_blank"><i className='bx bxl-medium bx-sm'></i></a>
            <a href="https://www.linkedin.com/in/samuelappiahkubi/" target="_blank"><i className='bx bxl-linkedin bx-sm'></i></a>
            <a href="https://github.com/dshadowexp" target="_blank"><i className='bx bxl-github bx-sm'></i></a>
            <a href="https://twitter.com/dshadowexp" target="_blank"><i className='bx bxl-twitter bx-sm'></i></a>
        </div>
        <div className="footer__trademark">
           <span>© Samuel Appiah-Kubi {(new Date()).getFullYear()}</span>
        </div>
    </footer>)
}