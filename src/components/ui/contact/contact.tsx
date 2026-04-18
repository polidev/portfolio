import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0);

  const handleMessageLength = (e) => {
    setMessageLength(e.target.value.length);
    console.log(messageLength);
  };

  const handleMessageSend = (e) => {
    e.preventDefault();

    if (messageLength > 149) {
      console.log("Sorry, your message is too long.");
    }

    console.log("Message sent.");
  };

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
            <textarea
              onChange={handleMessageLength}
              placeholder="Message"
              required
            ></textarea>

            <button disabled type="submit" onClick={handleMessageSend}>
              Send Message
            </button>
          </form>
        </aside>
      </section>
    </>
  );
}
