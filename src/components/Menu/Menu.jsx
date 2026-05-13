import { useState } from 'react';
import './Menu.css';

const menuData = [
  { id: 1, category: 'hot', name: 'Espresso', desc: 'Rich & robust', price: '$3.50', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, category: 'hot', name: 'Latte', desc: 'Smooth & creamy', price: '$4.50', img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, category: 'hot', name: 'Cappuccino', desc: 'Perfectly frothed', price: '$4.50', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, category: 'cold', name: 'Iced Coffee', desc: 'Refreshing & crisp', price: '$4.00', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1974&auto=format&fit=crop' },
  { id: 5, category: 'cold', name: 'Cold Brew', desc: 'Steeped for 18 hours', price: '$5.00', img: 'https://images.unsplash.com/photo-1461023058943-07cb14a97628?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, category: 'cold', name: 'Iced Latte', desc: 'Chilled creamy goodness', price: '$5.50', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2157&auto=format&fit=crop' },
  { id: 7, category: 'food', name: 'Avocado Toast', desc: 'Sourdough, chili flakes', price: '$8.50', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2072&auto=format&fit=crop' },
  { id: 8, category: 'food', name: 'Croissant sandwich', desc: 'Ham and cheese', price: '$7.50', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop' },
  { id: 9, category: 'dessert', name: 'Cheesecake', desc: 'New York style', price: '$6.00', img: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=2071&auto=format&fit=crop' },
  { id: 10, category: 'dessert', name: 'Brownie', desc: 'Fudgy & warm', price: '$4.50', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop' },
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
