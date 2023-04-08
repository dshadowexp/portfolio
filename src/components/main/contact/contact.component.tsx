import { useRef } from "react";

const sendEmail = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sent, Thank you!');
    }, 10000)
})

export default function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value) {
            alert('Fill all values');
        } else {
            sendEmail.then((res) => {
                alert(res);
                nameRef.current!.value = '';
                emailRef.current!.value = '';
                messageRef.current!.value = '';
            })
        }
    }

    return (<section id="contact" className="contact">
        <div className="contact__inner">
            <article className="contact__info">
                <div>
                    <h2>Send me a message!</h2>
                    <p>Got a question or proposal, or just want <br/> to say hello? Go ahead!</p>
                </div>
            </article>
            <div className="contact__form">
                <form onSubmit={onSubmit}>
                    <div className="contact__form__personal" >
                        <label htmlFor="name">
                            Your name
                            <input 
                                ref={nameRef}
                                id="name"
                                type="text" 
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            Email Address
                            <input 
                                ref={emailRef}
                                id="email"
                                type="email" 
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </label>
                    </div>
                    <label htmlFor="message">
                        Your Message
                        <textarea 
                            ref={messageRef}
                            name="message" 
                            id="message"
                            required
                            placeholder="Hi, I need a backend real-time server built for my company. How soon can you hop on to discuss this?" 
                            rows={3}
                        >
                        </textarea>
                    </label>
                    <div className="contact__action">
                        <button type='submit'>Shoot</button>
                    </div>
                </form>
            </div>
        </div>
    </section>);
}