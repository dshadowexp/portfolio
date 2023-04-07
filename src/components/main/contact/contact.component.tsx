export default function Contact() {
    return (<section className="contact">
        <article className="contact__info">
            <h2>Send me a message!</h2>
            <p>Got a question or proposal, or just want to say hello? Go ahead!</p>
        </article>
        <form className="contact__form">
            <div className="contact__form__personal">
                <label htmlFor="name">
                    Your name
                    <input 
                        id="name"
                        type="text" 
                        name="name"
                        placeholder="Enter your name"
                    />
                </label>
                <label htmlFor="email">
                    Email Address
                    <input 
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="Enter your email address"
                    />
                </label>
            </div>
            <label htmlFor="message">
                Your Message
                <textarea 
                    name="message" 
                    id="message"
                    placeholder="Hi, I need a backend real-time server built for my company. How soon can you hop on to discuss this?" 
                    rows={3}>
                </textarea>
            </label>
            <div className="contact__action">
                <button>Shoot</button>
            </div>
        </form>
    </section>);
}