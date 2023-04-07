export default function Footer() {
    return (<footer className="footer">
        <div className="footer__icons">
            <a href=""><i className='bx bxl-meta bx-sm'></i></a>
            <a href=""><i className='bx bxl-linkedin bx-sm'></i></a>
            <a href=""><i className='bx bxl-github bx-sm'></i></a>
            <a href=""><i className='bx bxl-instagram bx-sm'></i></a>
            <a href=""><i className='bx bxl-twitter bx-sm'></i></a>
        </div>
        <div className="footer__trademark">
           <span>© Samuel Appiah-Kubi {(new Date()).getFullYear()}</span>
        </div>
    </footer>)
}