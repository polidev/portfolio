import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="contact-section">
        <div className="contact-section_left">
          <h2>GET IN TOUCH</h2>
          <p>
            Available for freelance work, frontend engineering, high quality
            UI/UX design and performance.
          </p>
        </div>

        <div className="contact-section_right">
          <form action="">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <p className="copyright">&copy; 2026 Polidev</p>
    </footer>
  );
}
