import "./contact.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <aside className="contact-section_left">
          <h2>GET IN TOUCH</h2>
          <p>
            Available for freelance work, frontend engineering, high quality
            UI/UX design and performance.
          </p>
        </aside>

        <aside className="contact-section_right">
          <form action="">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </aside>
      </section>
    </>
  );
}
