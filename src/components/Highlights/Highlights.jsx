import './Highlights.css';

const Highlights = () => {
  return (
    <section className="highlights" id="highlights">
      <h1 className="heading"> why <span>visit us</span> </h1>
      
      <div className="box-container">
        <div className="box">
          <i className="fas fa-coffee"></i>
          <h3>Premium Coffee</h3>
          <p>We source the finest beans from around the world and roast them to perfection for every cup.</p>
        </div>
        
        <div className="box">
          <i className="fas fa-wifi"></i>
          <h3>Cozy Workspace</h3>
          <p>Enjoy blazing fast Wi-Fi and plenty of power outlets in a relaxing environment perfect for working.</p>
        </div>
        
        <div className="box">
          <i className="fas fa-leaf"></i>
          <h3>Organic Ingredients</h3>
          <p>All our syrups, milks, and food items are made with organic, locally sourced ingredients.</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
