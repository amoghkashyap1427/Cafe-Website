import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"> <span>about</span> us </h1>

      <div className="row">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" alt="Cafe Owner" />
        </div>

        <div className="content">
          <h3>what makes our coffee special?</h3>
          <p>
            Welcome to our cozy corner of the world. We believe that coffee is more than just a drink; it's an experience. Our journey started with a simple passion for bringing people together over the perfect cup.
          </p>
          <p>
            Every bean we brew is ethically sourced and roasted with love. Whether you're here to work, catch up with friends, or simply escape for a moment, our warm ambiance and dedicated team are here to make you feel right at home.
          </p>
          <a href="#" className="btn">learn more</a>
        </div>
      </div>

      <div className="team-section">
        <h2 className="sub-heading">Meet the Owner</h2>
        <div className="owner-profile">
          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop" alt="Cafe Owner" className="owner-img" />
          <div className="owner-info">
            <h3>David Anderson</h3>
            <span>Head Roaster & Founder</span>
            <p>With over 15 years of experience in the coffee industry, David opened this cafe with a simple mission: to serve the perfect cup of coffee while building a warm community. When he's not roasting beans, you can find him chatting with customers at the counter.</p>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <h2 className="sub-heading">Our Ambiance</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop" alt="Gallery 1" />
          <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" alt="Gallery 2" />
          <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" alt="Gallery 3" />
          <img src="https://b.zmtcdn.com/data/pictures/8/310188/53fb0f6a406b3affc6b6025fb6146bba_featured_v2.jpg" alt="Gallery 4" />
          <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop" alt="Gallery 5" />
          <img src="https://liquid-leds.com/cdn/shop/articles/how-can-great-lighting-create-perfect-ambience-in-your-cafe-376236.jpg?v=1747548293&width=500" alt="Gallery 6" />
        </div>
      </div>
    </section>
  );
};

export default About;
