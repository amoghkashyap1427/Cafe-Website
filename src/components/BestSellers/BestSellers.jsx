import './BestSellers.css';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Espresso Blend',
      description: 'Bold, rich, and packed with flavor. Perfect for those who crave an intense coffee experience.',
      price: '$15.99 / 12 oz',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'House Blend',
      description: 'A smooth and balanced blend ideal for every occasion. Light, medium roast with notes of caramel and chocolate.',
      price: '$12.99 / 12 oz',
      image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Cold Brew Concentrate',
      description: 'Refreshing, smooth, and ready-to-drink. Our cold brew concentrate is perfect for hot days or a quick pick-me-up.',
      price: '$18.99 / 16 oz',
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
                <button className="cart-btn" aria-label="Add to cart">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
