import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"> <span>contact</span> us </h1>

      <div className="row">
        <iframe 
          className="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540608796!2d-73.98822602353344!3d40.74844047138766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684883492716!5m2!1sen!2sus" 
          allowFullScreen="" 
          loading="lazy" 
          title="Google Map Placeholder"
        ></iframe>

        <form action="">
          <h3>get in touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" required />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" required />
          </div>
          <div className="inputBox">
            <span className="fas fa-pen"></span>
            <input type="text" placeholder="message" required />
          </div>
          <input type="submit" value="contact now" className="btn" />
        </form>
      </div>

      <div className="info-container">
        <div className="info">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Address</h3>
          <p>123 Coffee Street, NY 10001</p>
        </div>
        <div className="info">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>hello@coffeecafe.com</p>
        </div>
        <div className="info">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
          <a href="tel:+15551234567" className="btn mobile-call-btn">Call Us Now</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
