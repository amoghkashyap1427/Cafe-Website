import './Instagram.css';

const Instagram = () => {
  return (
    <section className="instagram" id="instagram">
      <h1 className="heading"> our <span>instagram</span> </h1>
      
      <div className="box-container">
        <div className="box">
          <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" alt="Insta 1" />
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop" alt="Insta 2" />
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop" alt="Insta 3" />
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" alt="Insta 4" />
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1495474472201-440ba4acfa00?q=80&w=2070&auto=format&fit=crop" alt="Insta 5" />
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
