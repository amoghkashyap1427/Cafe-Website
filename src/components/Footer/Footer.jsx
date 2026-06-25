import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3> <i className="fas fa-mug-hot"></i> Logo </h3>
          <p>The finest coffee shop experience. Where every cup tells a story.</p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="https://instagram.com/" target='_blank' className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#" className="links"> <i className="fas fa-phone"></i> +91 123-4567 </a>
          <a href="#" className="links"> <i className="fas fa-phone"></i> +91 123-4567 </a>
          <a href="#" className="links"> <i className="fas fa-envelope"></i>cafe@example.com</a>
          <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Jaipur, INDIA - 302001 </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home" className="links"> <i className="fas fa-arrow-right"></i> home </a>
          <a href="#about" className="links"> <i className="fas fa-arrow-right"></i> about </a>
          <a href="#menu" className="links"> <i className="fas fa-arrow-right"></i> menu </a>
          <a href="#review" className="links"> <i className="fas fa-arrow-right"></i> review </a>
          <a href="#contact" className="links"> <i className="fas fa-arrow-right"></i> contact </a>
        </div>

        <div className="box">
          <h3>opening hours</h3>
          <p className="links"> <i className="fas fa-clock"></i> Monday - Friday: 7:00 AM - 8:00 PM </p>
          <p className="links"> <i className="fas fa-clock"></i> Saturday: 8:00 AM - 9:00 PM </p>
          <p className="links"> <i className="fas fa-clock"></i> Sunday: 8:00 AM - 6:00 PM </p>
        </div>
      </div>

      <div className="credit"><span>Made by Amogh Kashyap</span> | All rights reserved </div>
    </section>
  );
};

export default Footer;
