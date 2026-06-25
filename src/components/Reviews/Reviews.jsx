import './Reviews.css';

const reviewData = [
  {
    id: 1,
    name: "Sara",
    img: "https://plus.unsplash.com/premium_photo-1688522732312-176d19f60af2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2xlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    text: "Absolutely the best coffee in town. The ambiance is incredibly cozy and the staff is always welcoming. Their Paneer Tikka Sandwich is a must-try!",
    rating: 5
  },
  {
    id: 2,
    name: "Mohan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVL92YX7AKl-c1BNykfYppoaEZWw0P8x9gSoZEGlfNDR2jVUJQifrqu3dJ&s=10",
    text: "I come here every morning to work. The Wi-Fi is fast, the coffee is exceptional, and the background music is just perfect for focusing.",
    rating: 5
  },
  {
    id: 3,
    name: "Rishi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChwQQsMsQfsk8gtFk6TJFg-2gp5QucznwEuuSCmBfJ-bolZahHaGaHVqb&s=10",
    text: "Such a beautiful cafe! The interior design is stunning and highly photogenic. The iced latte was refreshing and beautifully presented.",
    rating: 4
  }
];

const Reviews = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading"> customer's <span>review</span> </h1>

      <div className="box-container">
        {reviewData.map(review => (
          <div className="box" key={review.id}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="quote" />
            <p>{review.text}</p>
            <img src={review.img} className="user" alt={review.name} />
            <h3>{review.name}</h3>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
              {review.rating < 5 && <i className="fas fa-star-half-alt"></i>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
