import './BestSellers.css';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'South Indian Filter Coffee',
      description: 'Authentic, rich, and packed with flavor. Perfect for those who crave a traditional experience.',
      price: '₹350 / 250g',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Assam Kadak Chai',
      description: 'A strong and balanced tea blend ideal for every occasion. With notes of ginger and cardamom.',
      price: '₹250 / 250g',
      image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Cold Coffee Premix',
      description: 'Refreshing, smooth, and ready-to-drink. Perfect for hot Indian summers.',
      price: '₹450 / 500g',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section className="best-sellers-section" id="best-sellers">
      <h2 className="heading">Best Sellers</h2>
      <p className="subheading">Discover our most popular blends loved by coffee enthusiasts worldwide.</p>
      
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card glass-panel" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
