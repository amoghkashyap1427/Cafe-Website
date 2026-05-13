import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container glass-panel">
        <div className="hero-content">
          <h1>Experience the Art of Coffee.</h1>
          <p>
            Explore our premium selection of handcrafted coffee beans, brewed to perfection.
          </p>
          <button className="btn">Shop Now</button>
          
          <div className="hero-icons">
            <div className="icon-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
              <span>Hot Coffee</span>
            </div>
            <div className="icon-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 2-5 5-5-5"/><path d="m17 22-5-5-5 5"/></svg>
              <span>Cold Brew</span>
            </div>
            <div className="icon-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12z"/><path d="M6 2v2"/></svg>
              <span>Pastries</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=500&q=80" alt="Overhead view of coffee cup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
