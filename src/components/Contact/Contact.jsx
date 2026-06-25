import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"> <span>contact</span> us </h1>

      <div className="row">
        <iframe 
          className="map" 
          src="https://maps.google.com/maps?q=Vivekananda%20Global%20University&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
          <p>Vivekananda Global University, Jagatpura, Jaipur - 303012</p>
        </div>
        <div className="info">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>cafe@example.com</p>
        </div>
        <div className="info">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+91 123-4567890</p>
          <a href="tel:+911234567890" className="btn mobile-call-btn">Call Us Now</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
