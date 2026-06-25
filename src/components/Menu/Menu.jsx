import { useState } from 'react';
import './Menu.css';

const menuData = [
  { id: 1, category: 'hot', name: 'Filter Coffee', desc: 'Rich & robust South Indian style', price: '₹150', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, category: 'hot', name: 'Masala Chai', desc: 'Smooth, creamy & spiced', price: '₹100', img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, category: 'hot', name: 'Cutting Chai', desc: 'Perfectly brewed street style', price: '₹50', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, category: 'cold', name: 'Cold Coffee', desc: 'Refreshing & crisp', price: '₹200', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1974&auto=format&fit=crop' },
  { id: 5, category: 'cold', name: 'Iced Lemon Tea', desc: 'Steeped and chilled', price: '₹150', img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F9eada0d203bfb580d801b478edd553465c7afb52' },
  { id: 6, category: 'cold', name: 'Rose Milk', desc: 'Chilled sweet goodness', price: '₹180', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2157&auto=format&fit=crop' },
  { id: 7, category: 'food', name: 'Paneer Tikka Sandwich', desc: 'Spiced paneer, mint chutney', price: '₹250', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2072&auto=format&fit=crop' },
  { id: 8, category: 'food', name: 'Vada Pav', desc: 'Spicy potato slider', price: '₹100', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop' },
  { id: 9, category: 'dessert', name: 'Gulab Jamun', desc: 'Warm & sweet', price: '₹120', img: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=2071&auto=format&fit=crop' },
  { id: 10, category: 'dessert', name: 'Rasmalai', desc: 'Creamy & delicate', price: '₹150', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop' },
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
