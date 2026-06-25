import { useState } from 'react';
import './Menu.css';

const menuData = [
  { id: 1, category: 'hot', name: 'Filter Coffee', desc: 'Rich & robust South Indian style', price: '₹150', img: 'https://images.unsplash.com/photo-1551687023-e40df5f1ef1e?auto=format&fit=crop&w=500&q=60' },
  { id: 2, category: 'hot', name: 'Masala Chai', desc: 'Smooth, creamy & spiced', price: '₹100', img: 'https://images.unsplash.com/photo-1574856344991-afa31b8853d4?auto=format&fit=crop&w=500&q=60' },
  { id: 3, category: 'hot', name: 'Cutting Chai', desc: 'Perfectly brewed street style', price: '₹50', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=60' },
  { id: 4, category: 'cold', name: 'Cold Coffee', desc: 'Refreshing & crisp', price: '₹200', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=60' },
  { id: 5, category: 'cold', name: 'Iced Lemon Tea', desc: 'Steeped and chilled', price: '₹150', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=60' },
  { id: 6, category: 'cold', name: 'Rose Milk', desc: 'Chilled sweet goodness', price: '₹180', img: 'https://images.unsplash.com/photo-1615486171448-434079e0cc16?auto=format&fit=crop&w=500&q=60' },
  { id: 7, category: 'food', name: 'Paneer Tikka Sandwich', desc: 'Spiced paneer, mint chutney', price: '₹250', img: 'https://images.unsplash.com/photo-1628191137573-dee64e727614?auto=format&fit=crop&w=500&q=60' },
  { id: 8, category: 'food', name: 'Vada Pav', desc: 'Spicy potato slider', price: '₹100', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=60' },
  { id: 9, category: 'dessert', name: 'Gulab Jamun', desc: 'Warm & sweet', price: '₹120', img: 'https://images.unsplash.com/photo-1589114471246-37cb420b22f2?auto=format&fit=crop&w=500&q=60' },
  { id: 10, category: 'dessert', name: 'Rasmalai', desc: 'Creamy & delicate', price: '₹150', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=60' },
];

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredMenu = activeFilter === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeFilter);

  return (
    <section className="menu" id="menu">
      <h1 className="heading"> our <span>menu</span> </h1>

      <div className="filter-buttons">
        <button className={`btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
        <button className={`btn ${activeFilter === 'hot' ? 'active' : ''}`} onClick={() => setActiveFilter('hot')}>Hot Drinks</button>
        <button className={`btn ${activeFilter === 'cold' ? 'active' : ''}`} onClick={() => setActiveFilter('cold')}>Cold Drinks</button>
        <button className={`btn ${activeFilter === 'food' ? 'active' : ''}`} onClick={() => setActiveFilter('food')}>Food</button>
        <button className={`btn ${activeFilter === 'dessert' ? 'active' : ''}`} onClick={() => setActiveFilter('dessert')}>Desserts</button>
      </div>

      <div className="box-container">
        {filteredMenu.map(item => (
          <div className="box" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="price">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
