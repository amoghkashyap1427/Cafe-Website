import { useState } from 'react';
import './Menu.css';

const menuData = [
  { id: 1, category: 'hot', name: 'Filter Coffee', desc: 'Rich & robust South Indian style', price: '₹150', img: 'https://www.thecaffeinebaar.com/cdn/shop/articles/Filter_1500x.jpg?v=1636717220' },
  { id: 2, category: 'hot', name: 'Masala Chai', desc: 'Smooth, creamy & spiced', price: '₹100', img: 'https://cdn.shopify.com/s/files/1/0758/6929/0779/files/Masala_Tea_-_Annams_Recipes_Shop_2_480x480.jpg?v=1732347934' },
  { id: 3, category: 'hot', name: 'Cutting Chai', desc: 'Perfectly brewed street style', price: '₹50', img: 'https://nestasia.in/cdn/shop/files/glasstumblersetwithstand_5.jpg?v=1710755482&width=800' },
  { id: 4, category: 'cold', name: 'Cold Coffee', desc: 'Refreshing & crisp', price: '₹200', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5amPWHdM4RBHN9Q51Ypz--0UKcNdOeLXsPGSagPtCv8oQobBR0cAcepD&s=10' },
  { id: 5, category: 'cold', name: 'Iced Lemon Tea', desc: 'Steeped and chilled', price: '₹150', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUQpBLiRv_gqbtdf9btU5q_4-U9Sg-b85h5sM4R57rxdScub2YR5CxGjh&s=10' },
  { id: 6, category: 'cold', name: 'Frappe', desc: 'Chilled sweet goodness', price: '₹180', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6gbPQEtkx6yIUpT4uTbs0G6KjW-FjBreq08g549MvOkc5enC1e7anWA&s=10' },
  { id: 7, category: 'food', name: 'Paneer Tikka Sandwich', desc: 'Spiced paneer, mint chutney', price: '₹250', img: 'https://relishfood.in/wp-content/uploads/2025/05/tandoori-paneer.webp' },
  { id: 8, category: 'food', name: 'Vada Pav', desc: 'Spicy potato slider', price: '₹100', img: 'https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg' },
  { id: 9, category: 'dessert', name: 'Gulab Jamun', desc: 'Warm & sweet', price: '₹120', img: 'https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800' },
  { id: 10, category: 'dessert', name: 'Rasmalai', desc: 'Creamy & delicate', price: '₹150', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WaAztSrZHuFx-C3r9dVw6gv81sOHMq9d5PEIoGf7G_0lGYB9mUhBsaU&s=10' },
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
