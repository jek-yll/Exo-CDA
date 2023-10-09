const ContactForm = () => {
    return (
        <>
            <h1>Contact</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="password" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </>
    )
}

export default ContactForm